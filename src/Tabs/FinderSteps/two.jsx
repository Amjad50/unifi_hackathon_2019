import React, { Component } from 'react';

const applications_use = ['Youtube', 'Facebook', 'Snapshat', 'Games', 'Instegram', 'Netflex', 'Mails', 'Browsing'];

class Two extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)

    this.state = {
      usagePhours: 0,
      mostUsedApps: [],
    }
  }

  changed() {
    this.props.stateupdate(this.state)
    this.props.buttonupdate(this.state.usagePhours !== 0 && this.state.mostUsedApps.length === 3)
  }

  toggle(app) {
    // app is not found
    if (this.state.mostUsedApps.indexOf(app) === -1) {
      if (this.state.mostUsedApps.length < 3) {
        this.state.mostUsedApps.push(app)
        this.setState(this.state, this.changed)
      }
    }else {
      this.setState({mostUsedApps: this.state.mostUsedApps.filter(e => e !== app)}, this.changed)
    }
  }


  render() {
    return (
      <div>
        <p>How many hours do you use the internet (Average): </p>
        <input type="number" className="form-control" placeholder="Hours" onChange={(e) => this.setState({ usagePhours: parseInt(e.target.value) }, this.changed)}/>
        <br />
        <br />
        <p>Choose the most 3 Applications that you use: </p>
        <div className="btn-group-toggle" data-toggle="buttons">
          {
            applications_use.map(v => {
              return (
                <button key={v} type="button" className={"btn btn-" + (this.state.mostUsedApps.indexOf(v) === -1 ? "primary" : "success")}
                  onClick={() => this.toggle(v)}>{v}</button>
              )
            })
          }
        </div>

      </div>
    );
  }
}

export { Two, applications_use };
