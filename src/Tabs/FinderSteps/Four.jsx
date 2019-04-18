import React, { Component } from 'react';

class Four extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addons: {
        tv: false,
      }
    }
  }

  componentDidMount() {
    this.changed()
  }

  changed() {
    this.props.stateupdate(this.state)
    this.props.buttonupdate(true)
  }


  render() {
    return (
      <div>
        <br />
        <p>please choose some addons that you would like to have in your package: </p>
        <div className="btn-group-toggle" data-toggle="buttons">
          {
            Object.keys(this.state.addons).map(v => {
              return (
                <button key={v} type="button" className={"btn btn-" + (!this.state.addons[v] ? "primary" : "success")}
                  onClick={() => {
                    this.state.addons[v] = !this.state.addons[v]
                    this.setState(this.state)
                  }}>{v}</button>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Four;
