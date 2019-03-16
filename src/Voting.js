import React, { Component } from "react";

class Voting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="candidateSelection">Select a Candidate</label>
        <select
          value={this.state.selected}
          onChange={e => {
            this.setState({ selected: e.target.value });
            this.props.selectCandidate(e.target.value);
          }}
          className="form-control"
        >
          <option value="" key="" />
          {this.props.candidates.map((candidate, key) => {
            return (
              <option value={key} key={key}>
                {candidate.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Voting;
