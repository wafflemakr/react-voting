import React, { Component } from "react";

import Select from "./selection";

class Results extends Component {
  render() {
    return (
      <div>
        <div className="container p-3" hidden={this.props.voting}>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <h1 className="text-center">Voting Results</h1>
              <br />

              <div id="content">
                <table className="table table-striped">
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
                    {this.props.candidates.map((candidate, key) => {
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
                <Select
                  candidates={this.props.candidates}
                  selectCandidate={cand => this.props.onSelection(cand)}
                />
                <button
                  onClick={this.props.onVote}
                  className="btn btn-primary"
                  hidden={!this.props.connected}
                >
                  Vote
                </button>
                <div id="txState" />
                <hr />
                <p
                  className="text-center m-2"
                  id="voter"
                  hidden={!this.props.connected}
                >
                  Voting from: {this.props.account}
                </p>
              </div>
            </div>

            <br />
          </div>
          <div className="text-center m-3">
            <h5>Powered by Blockchain Technology.</h5>
            <center>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://rinkeby.etherscan.io/address/${
                  this.props.contractAddress
                }`}
              >
                See contract on Etherscan
              </a>
            </center>
          </div>
        </div>
        <div className="text-center m-5" hidden={!this.props.voting}>
          <br />
          <h2>{`Processing your vote to ${this.props.candidateName}`}</h2>
          <h3>Please wait...</h3>
        </div>
      </div>
    );
  }
}

export default Results;
