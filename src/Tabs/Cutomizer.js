import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './../my.css'
import Slider, { createSliderWithTooltip } from 'rc-slider';
const SliderWithToolTip = createSliderWithTooltip(Slider);

class Customizer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      unlimited: false,
      quota: 10,
      download: 10,
      upload: 10,
      tv: false,
      mins: 0,
      sms: 0
    }
  }

  finish() {
    window.location = 'https://unifi.com.my/unifi-en/ijoin/registration_form_new.page'
  }

  calculatePrice() {
    let state = this.state
    return parseInt((state.unlimited ? 50 : state.quota) * 0.8 + state.download * 0.4 + state.upload * 0.5 + state.mins * 0.01 + state.sms * 0.01)
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="row">
          <br />
          <div className="col-8">
          <br />
            <p>Quota: </p>
            <input type="checkbox" onChange={e => this.setState({ unlimited: e.target.checked })} /> unlimited
        <div className="slide-wrap" style={{ width: 50 + '%' }}>
              <SliderWithToolTip disabled={this.state.unlimited} dismin={10} max={100} step={10} onChange={(e) => this.setState({ quota: e })} />
            </div>

            <br />
            <p>Download Speed: </p>
            <div className="slide-wrap" style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={10} max={300} step={10} onChange={(e) => this.setState({ download: e })} />
            </div>

            <br />
            <p>Upload Speed: </p>
            <div className="slide-wrap" style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={10} max={300} step={10} onChange={(e) => this.setState({ upload: e })} />
            </div>

            <br />
            <p>Calling Minutes : </p>
            <div className="slide-wrap" style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={0} max={300} step={20} onChange={(e) => this.setState({ mins: e })} />
            </div>

            <br />
            <p>SMS Messages : </p>
            <div className="slide-wrap" style={{ width: 50 + '%' }}>
              <SliderWithToolTip dismin={0} max={600} step={20} onChange={(e) => this.setState({ sms: e })} />
            </div>
          </div>
          <div className="col-4 mydiv">
            <br />
            <div className="finisher">
              <table>
                <tbody>
                  <tr>
                    <td>quota</td>
                    <td>{this.state.unlimited ? "Unlimited" : this.state.quota + "GB"}</td>
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
                  <tr>
                    <td><h3>Price</h3></td>
                    <td><h3>{this.calculatePrice()} RM/month</h3></td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div>
          <a type="button" className="btn btn-success"
            onClick={this.finish}>Finish</a>
        </div>
            </div>
          </div>
        </div>

       
      </div>
    );

  }
}

export default Customizer;