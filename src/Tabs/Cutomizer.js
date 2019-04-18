import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
const SliderWithToolTip = createSliderWithTooltip(Slider);

class Customizer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      unlimited: false,
      quota: 0,
      download: 0,
      upload: 0,
      tv: false,
      mins: 0,
      sms: 0
    }
  }

  finish() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <p>Quota: </p>
            <input type="checkbox" onChange={e => this.setState({ unlimited: e.target.checked })} /> unlimited
        <div style={{ width: 50 + '%' }}>
              <SliderWithToolTip disabled={this.state.unlimited} dismin={10} max={100} step={10} onChange={(e) => this.setState({ quota: e })} />
            </div>

            <p>Download Speed: </p>
            <div style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={10} max={300} step={10} onChange={(e) => this.setState({ download: e })} />
            </div>

            <p>Upload Speed: </p>
            <div style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={10} max={300} step={10} onChange={(e) => this.setState({ upload: e })} />
            </div>

            <p>Calling Minutes : </p>
            <div style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={0} max={300} step={20} onChange={(e) => this.setState({ mins: e })} />
            </div>

            <p>SMS Messages : </p>
            <div style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={0} max={600} step={20} onChange={(e) => this.setState({ sms: e })} />
            </div>
          </div>
          <div className="col-2">
            <table>
              <tbody>
                <tr>
                  <td>quota</td>
                  <td>{this.state.quota} GB</td>
                </tr>
                <tr>
                  <td>Download Speed</td>
                  <td>{this.state.download} Gbps</td>
                </tr>
                <tr>
                  <td>Upload Speed</td>
                  <td>{this.state.upload} Gbps</td>
                </tr>
                <tr>
                  <td>Minutes calling</td>
                  <td>{this.state.mins} minutes</td>
                </tr>
                <tr>
                  <td>SMS</td>
                  <td>{this.state.sms}</td>
                </tr>
                <tr>
                  <td>TV included</td>
                  <td>{this.state.tv ? "True" : "False"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <a type="button" className="btn btn-dark"
            onClick={this.finish}>Finish</a>
        </div>
      </div>
    );

  }
}

export default Customizer;