import React, { Component } from 'react';
import One from './FinderSteps/one';
import { Two } from './FinderSteps/two';
import Three from './FinderSteps/three';
import Four from './FinderSteps/Four'
import Final from './FinderSteps/Final'

class Finder extends Component {

  constructor(props) {
    super(props);

    this.nextBtn = this.nextBtn.bind(this);
    this.backBtn = this.backBtn.bind(this);
    this.stepChange = this.stepChange.bind(this);
    this.updateButtons = this.updateButtons.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      currentStep: 1,
      nexton: false,
      // one
      age: 0,
      gender: '',
      // two
      usagePhours: 0,
      mostUsedApps: [],
      //three
      callsPday: 0,
      smsPday: 0,
      //four
      addons: {
        tv: false,
      }
    }

  }

  stepChange(step, override) {
    if(override || step < this.state.currentStep){
    this.setState({ currentStep: step });
    return;
    }
  }

  backBtn() {
    if (this.state.currentStep > 1) {
      this.stepChange(this.state.currentStep - 1)
      this.updateButtons(true)
    }
  }

  nextBtn() {
    if (this.state.currentStep < 5) {
      this.stepChange(this.state.currentStep + 1, true)
      this.updateButtons(false)
    }
    else
      this.finish()
  }

  finish() {
    console.log('finished')
  }

  updateButtons(next) {
    this.setState({
      nexton: next
    })
  }

  updateState(state) {
    this.setState(state)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <ul className="nav nav-pills nav-justify" id="myTab" role="tablist">
            {/* <div className="col"></div> */}
              <li className="col nav-item">
                <a className={"nav-link rounded-circle border border-secondary"
                  + (this.state.currentStep === 1 ? " active" : "")}
                  id="one-tab" data-toggle="tab" href="#finder_1" role="tab" onClick={() => this.stepChange(1)}>1</a>
              </li>
              <li className="col nav-item">
                <a className={"nav-link rounded-circle border border-secondary"
                  + (this.state.currentStep < 2 ? " disabled" : "") + (this.state.currentStep === 2 ? " active" : "")}
                  id="two-tab" data-toggle="tab" href="#finder_2" role="tab"
                  onClick={() => this.stepChange(2)}>2</a>
              </li>
              <li className=" col nav-item">
                <a className={"nav-link rounded-circle border border-secondary"
                  + (this.state.currentStep < 3 ? " disabled" : "") + (this.state.currentStep === 3 ? " active" : "")}
                  id="three-tab" data-toggle="tab" href="#finder_3" role="tab"
                  onClick={() => this.stepChange(3)}>3</a>
              </li>
              <li className="col nav-item">
                <a className={"nav-link rounded-circle border border-secondary"
                  + (this.state.currentStep < 4 ? " disabled" : "") + (this.state.currentStep === 4 ? " active" : "")}
                  id="four-tab" data-toggle="tab" href="#finder_4" role="tab"
                  onClick={() => this.stepChange(4)}>4</a>
              </li>
              <li className="col nav-item">
                <a className={"nav-link rounded-circle border border-secondary"
                  + (this.state.currentStep < 5 ? " disabled" : "") + (this.state.currentStep === 5 ? " active" : "")}
                  id="five-tab" data-toggle="tab" href="#finder_5" role="tab"
                  onClick={() => this.stepChange(5)}>5</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="tab-content">
            <div className={"tab-pane fade " + (this.state.currentStep === 1 ? "show active" : "")}
              id="one"><One stateupdate={this.updateState} buttonupdate={this.updateButtons} /></div>
            <div className={"tab-pane fade " + (this.state.currentStep === 2 ? "show active" : "")} id="two">
              <Two stateupdate={this.updateState} buttonupdate={this.updateButtons} /></div>
            <div className={"tab-pane fade " + (this.state.currentStep === 3 ? "show active" : "")} id="three">
              <Three stateupdate={this.updateState} buttonupdate={this.updateButtons} /></div>
            <div className={"tab-pane fade " + (this.state.currentStep === 4 ? "show active" : "")} id="four">
              <Four stateupdate={this.updateState} buttonupdate={this.updateButtons} /></div>
            <div className={"tab-pane fade " + (this.state.currentStep === 5 ? "show active" : "")} id="five">
              <Final data={this.state} /></div>
          </div>
        </div>
        <div>
          {this.state.currentStep > 1 ? <a type="button"
            className="btn btn-dark"
            onClick={this.backBtn}>Back</a> : null}
          <a type="button" className={"btn btn-dark" + (this.state.nexton || this.state.currentStep === 4 || this.state.currentStep == 5 ? "" : " disabled")}
            onClick={this.nextBtn}>{this.state.currentStep < 5 ? 'Next' : 'Finish'}</a>
        </div>
      </div>
    );

  }
}

export default Finder;