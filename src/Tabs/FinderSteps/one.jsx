import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './../../my.css'
import Slider, { createSliderWithTooltip } from 'rc-slider';
const SliderWithToolTip = createSliderWithTooltip(Slider);


class One extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age: 0,
      gender: ''
    }
  }

  changed() {
    this.props.stateupdate(this.state)
    this.props.buttonupdate(this.state.age !== 0 && this.state.gender !== '')
  }


  render() {
    return (
      <div>
        <br />
        <p>Choose your gender: </p>
        <select className="custom-select" id="gender" onChange={(e) => this.setState({ gender: e.target.value }, this.changed)}>
          <option value="">Choose...</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <br />
        <br />
        <p>Choose your Age: </p>
        <div className="slide-wrap" style={{ width: 50 + '%' }}>
          <SliderWithToolTip  min={5} max={60} step={1} onChange={(e) => this.setState({age: e}, this.changed)} />
        </div>
      </div>
    );
  }
}

export default One;
