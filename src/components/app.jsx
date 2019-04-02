import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Web3 from "web3";
import { abi, contractAddress } from "../config";

// Import Components
import Register from "./register";
import Results from "./results";
import Latest from "./latest";

class App extends Component {
  constructor() {
    super();
    this.state = {
      registerId: "",
      account: "",
      totalCandidates: 0,
      candidates: [],
      connected: false,
      selected: "",
      votingApp: {},
      voting: false,
      events: [],
      loaded: true
    };
  }

  async loadWeb3() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("Network:", network);
    const acc = await web3.eth.getAccounts();
    console.log("Account:", acc[0]);
    console.log("Contract Address: ", contractAddress);

    const votingApp = new web3.eth.Contract(abi, contractAddress);

    const totalCandidates = await votingApp.methods.totalCandidates().call();

    let candidates = [];

    for (let i = 1; i <= totalCandidates; i++) {
      let candidate = await votingApp.methods.candidates(i).call();
      candidates.push(candidate);
    }

    this.setState({
      connected: true,
      candidates,
      totalCandidates,
      account: acc[0],
      votingApp
    });

    if (this.state.votingApp) this.loadEvents();
  }

  loadEvents() {
    this.state.votingApp
      .getPastEvents("allEvents", {
        fromBlock: 4053116,
        toBlock: "latest"
      })
      .then(events => {
        this.setState({
          events
        });
      });
  }

  componentWillMount() {
    this.loadWeb3();
  }

  componentDidMount() {
    setInterval(() => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      web3.eth.getAccounts().then(acc => {
        //if there is at least one account
        if (acc.length > 0) {
          // if account changes
          if (acc[0] !== this.state.account) {
            this.setState({ account: acc[0] });
            //this.loadWeb3();
          }
        } else {
          this.setState({ connected: false, account: "" });
        }
      });
    }, 1000);
  }

  latest = () => {
    if (this.state.connected) {
      return <Latest events={this.state.events} />;
    } else return null;
  };

  register = () => {
    if (this.state.connected) {
      return (
        <Register
          onRegister={id => this.handleRegister(id)}
          connected={this.state.connected}
        />
      );
    } else return null;
  };

  results = () => {
    if (this.state.connected) {
      return (
        <Results
          account={this.state.account}
          totalCandidates={this.state.totalCandidates}
          candidates={this.state.candidates}
          votingApp={this.state.votingApp}
          voting={this.state.voting}
          connected={this.state.connected}
          onVote={() => this.vote()}
          onSelection={c => this.handleSelection(c)}
          candidateName={this.candidateName()}
          contractAddress={contractAddress}
        />
      );
    } else return null;
  };

  handleRegister = _id => {
    this.state.votingApp.methods
      .registerVoter(_id)
      .send({ from: this.state.account })
      .once("receipt", receipt => {
        return null;
      });
  };

  vote = () => {
    this.state.votingApp.methods
      .approved(this.state.account)
      .call()
      .then(result => {
        if (result) {
          if (this.state.selected) {
            this.state.votingApp.methods
              .voters(this.state.account)
              .call()
              .then(result => {
                //Result is False when addres has not voted yet
                if (!result) {
                  this.setState({ voting: true });
                  let candidate = parseInt(this.state.selected);
                  this.state.votingApp.methods
                    .vote(candidate)
                    .send({ from: this.state.account })
                    .once("receipt", receipt => {
                      setTimeout(() => {
                        this.setState({ voting: false, candidates: [] });
                        this.loadWeb3();
                      }, 1000);
                    })
                    .on("error", err => this.setState({ voting: false }));
                } else {
                  window.alert("Error: You cannot vote twice!!");
                }
              });
          } else {
            window.alert("Please Select a Candidate first");
          }
        } else window.alert("Please get your Address approved first");
      });
  };

  handleSelection = cand => {
    this.setState({ selected: cand });
  };

  candidateName = () => {
    if (this.state.candidates) {
      const candidate = this.state.candidates.filter(
        c => c.id === this.state.selected
      );
      let name;
      candidate[0] ? (name = candidate[0].name) : (name = "");
      return name;
    }
  };

  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Voting App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={`${process.env.PUBLIC_URL}/`}>
                Voting Results
              </Nav.Link>
              <Nav.Link href={`${process.env.PUBLIC_URL}/register`}>
                Register
              </Nav.Link>
              <Nav.Link href={`${process.env.PUBLIC_URL}/latest`}>
                Latest Events
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          exact
          path={`${process.env.PUBLIC_URL}/register`}
          component={this.register}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/latest`}
          component={this.latest}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={this.results}
        />
      </Router>
    );
  }
}

export default App;
