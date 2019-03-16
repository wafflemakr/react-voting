import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import { abi, contractAddress } from "./config";
import Voting from "./Voting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      totalCandidates: 0,
      candidates: [],
      connected: false,
      selected: "",
      votingApp: {},
      voting: false
    };

    this.selection = this.selection.bind(this);
  }

  componentWillMount() {
    this.loadWeb3();

    setInterval(() => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      web3.eth.getAccounts().then(acc => {
        //if there is at least one account
        if (acc.length > 0) {
          if (acc[0] !== this.state.account) {
            this.setState({ account: acc[0] });
            this.setState({ connected: true });
          }
        } else {
          this.setState({ connected: false });
          this.setState({ account: "" });
        }
      });
    }, 1000);
  }

  async loadWeb3() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("Network:", network);
    const acc = await web3.eth.getAccounts();
    console.log("Account:", acc[0]);
    this.setState({ account: acc[0] });
    console.log("Contract Address: ", contractAddress);

    const votingApp = new web3.eth.Contract(abi, contractAddress);
    this.setState({ votingApp });

    const totalCandidates = await votingApp.methods.totalCandidates().call();
    this.setState({ totalCandidates });

    for (let i = 1; i <= this.state.totalCandidates; i++) {
      let candidate = await votingApp.methods.candidates(i).call();
      this.setState({ candidates: [...this.state.candidates, candidate] });
    }

    this.setState({ connected: true });
  }

  vote = () => {
    if (this.state.selected) {
      this.state.votingApp.methods
        .voters(this.state.account)
        .call()
        .then(result => {
          //Result is False when addres has not voted yet
          if (!result) {
            this.setState({ voting: true });
            let candidate = parseInt(this.state.selected) + 1;
            this.state.votingApp.methods
              .vote(candidate)
              .send({ from: this.state.account })
              .once("receipt", receipt => {
                setTimeout(() => {
                  this.setState({ voting: false });
                  this.setState({ candidates: [] });
                  this.loadWeb3();
                }, 5000);
              })
              .on("error", err => this.setState({ voting: false }));
          } else {
            window.alert("Error: You cannot vote twice!!");
          }
        });
    } else {
      window.alert("Please Select a Candidate first");
    }
  };

  selection = cand => {
    this.setState({ selected: cand });
  };

  render() {
    return (
      <div>
        <div className="container" hidden={this.state.voting}>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <h1 className="text-center">Voting Results</h1>
              <hr />
              <br />

              <div id="content">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th className="text-center" scope="col">
                        Total Votes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.candidates.map((candidate, key) => {
                      return (
                        <tr key={key}>
                          <td>{candidate.id}</td>
                          <td>{candidate.name}</td>
                          <td className="text-center">{candidate.voteCount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <hr />
                <Voting
                  candidates={this.state.candidates}
                  selectCandidate={this.selection}
                />
                <button
                  onClick={this.vote}
                  className="btn btn-primary"
                  hidden={!this.state.connected}
                >
                  Vote
                </button>
                <div id="txState" />
                <hr />
              </div>
            </div>
            <p
              id="voter"
              className="text-center"
              hidden={!this.state.connected}
            >
              Voting from: {this.state.account}
            </p>
            <br />
          </div>
        </div>
        <div className="text-center" hidden={!this.state.voting}>
          <br />
          <h2>
            Processing your vote to
            {this.state.candidates[0] ? this.state.candidates[0].name : ""}...
          </h2>
        </div>
        <div>
          <h4 className="text-center" hidden={this.state.voting}>
            Powered by Blockchain Technology.
          </h4>
          <center>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rinkeby.etherscan.io/address/0x18319a776c48d8aef4fbe4d7a3d7caa106d04b22"
            >
              See contract on Etherscan
            </a>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
