import React, { Component } from "react";

class Select extends Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    };
  }

  render() {
    return (
      <div className="form-group">
        <label>Select a Candidate</label>
        <select
          value={this.state.selected}
          onChange={e => {
            this.props.selectCandidate(e.target.value);
            this.setState({ selected: e.target.value });
          }}
          className="form-control"
        >
          <option value={""} key="" />
          {this.props.candidates.map(candidate => {
            return (
              <option value={candidate.id} key={candidate.id}>
                {candidate.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Select;
