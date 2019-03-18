import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Register from "./register";
import Results from "./results";
import Latest from "./latest";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Web3 from "web3";
import { abi, contractAddress } from "../config";

class App extends Component {
  constructor() {
    console.log("contructor");
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

  componentWillMount() {
    this.loadWeb3();
  }

  async loadWeb3() {
    console.log("loadweb3");
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("Network:", network);
    const acc = await web3.eth.getAccounts();
    console.log("Account:", acc[0]);
    console.log("Contract Address: ", contractAddress);

    const votingApp = new web3.eth.Contract(abi, contractAddress);

    const totalCandidates = await votingApp.methods.totalCandidates().call();

    let candidates = [...this.state.candidates];
    for (let i = 1; i <= totalCandidates; i++) {
      let candidate = await votingApp.methods.candidates(i).call();
      candidates = [...candidates, candidate];
    }

    this.setState({ events: [] });

    const events = await votingApp.getPastEvents("allEvents", {
      fromBlock: 0,
      toBlock: "latest"
    });

    console.log("before setting state");

    this.setState({
      connected: true,
      events,
      candidates,
      totalCandidates,
      account: acc[0],
      votingApp
    });

    console.log("web3 ended");
  }

  componentDidMount() {
    console.log("component did mount");
    setInterval(() => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      web3.eth.getAccounts().then(acc => {
        //if there is at least one account
        if (acc.length > 0) {
          if (acc[0] !== this.state.account) {
            this.setState({ account: acc[0], connected: true });
          }
        } else {
          this.setState({ connected: false, account: "" });
        }
      });
    }, 1000);
  }

  latest = () => {
    if (this.state.connected) {
      console.log("latest rendered");
      return <Latest events={this.state.events} />;
    } else return null;
  };

  register = () => {
    if (this.state.connected) {
      console.log("register rendered");
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
      console.log("results rendered");
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
    console.log("vote");
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
    console.log("candidate name calc");
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
    console.log("app render fx");
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Voting App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Voting Results</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/latest">Latest Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/register" component={this.register} />
        <Route exact path="/latest" component={this.latest} />
        <Route exact path="/" component={this.results} />
      </Router>
    );
  }
}

export default App;