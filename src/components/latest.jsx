import React, { Component } from "react";

class Latest extends Component {
  render() {
    return (
      <div>
        <div className="container m-4">
          <h2 className="text-center">Latest Events</h2>
          <table className="table table-striped table-light text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Tx Hash</th>
              </tr>
            </thead>
            <tbody>
              {this.props.events.map((e, k) => {
                return (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{e.event}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://rinkeby.etherscan.io/tx/${
                          e.transactionHash
                        }`}
                      >
                        {e.transactionHash}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Latest;
