import React, { Component } from "react";

class Latest extends Component {
  render() {
    if (this.props.events.length > 0) {
      return (
        <div className="p-5">
          <div className="container mx-auto">
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
    } else {
      return <h2 className="m-2">Loading events... Please wait.</h2>;
    }
  }
}

export default Latest;
