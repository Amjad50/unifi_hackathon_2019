import React, { Component } from 'react';

class Three extends Component {

  constructor(props) {
    super(props);

    this.state = {
      callsPday: 0,
      smsPday: 0,
    }
  }

  changed() {
    this.props.stateupdate(this.state)
    this.props.buttonupdate(this.state.callsPday !== 0 && this.state.smsPday !== 0)
  }


  render() {
    return (
      <div>
        <p>How many times do you call someone per day (Average): </p>
        <input type="number" className="form-control" placeholder="Calls" onChange={(e) => this.setState({ callsPday: parseInt(e.target.value) }, this.changed)} />
        <br />
        <br />
        <p>How many times do you use sms per day (Average): </p>
        <input type="number" className="form-control" placeholder="Sms" onChange={(e) => this.setState({ smsPday: parseInt(e.target.value) }, this.changed)} />
      </div>
    );
  }
}

export default Three;
