import React, { Component } from 'react';


class Data {
  constructor(quota, down, up, minscalls, sms, hastv,price) {
    this.quota = quota;
    this.down = down;
    this.up = up;
    this.minscalls = minscalls;
    this.sms = sms;
    this.hastv = hastv;
    this.price = price;
  }
}

function genTable(data) {
  return (
    <table>
      <tbody>
        <tr>
          <td>quota</td>
          <td>{data.quota} GB</td>
        </tr>
        <tr>
          <td>Download Speed</td>
          <td>{data.down} Gbps</td>
        </tr>
        <tr>
          <td>Upload Speed</td>
          <td>{data.up} Gbps</td>
        </tr>
        <tr>
          <td>Minutes calling</td>
          <td>{data.minscalls} minutes</td>
        </tr>
        <tr>
          <td>SMS</td>
          <td>{data.sms}</td>
        </tr>
        <tr>
          <td>TV included</td>
          <td>{data.hastv ? "True" : "False"}</td>
        </tr>
        <tr>
          <td><h3>Price</h3></td>
          <td><h3>{data.price} RM/month</h3></td>
        </tr>
      </tbody>
    </table>
  )
}

//['Youtube', 'Facebook', 'Snapshat', 'Games', 'Instegram', 'Netflex', 'Mails', 'Browsing'];

function predict(a) {
  console.log(a)
  let calls = ''
  let msgs = ''
  if (a.callsPday != 0)
    calls = '100 minutes'
  else
    calls = '0 minutes'

  if (a.smsPday != 0)
    msgs = '50 SMS'
  else
    msgs = '0 SMS'


  if (a.mostUsedApps.indexOf('Youtube') !== -1 || a.mostUsedApps.indexOf('Games') !== -1 || a.mostUsedApps.indexOf('Netflex') !== -1) {
    return new Data('unlimited', '100Mbps', '20Mbps', calls, msgs, a.addons.TV, 150)
  }

  if (a.mostUsedApps.indexOf('Browser') !== -1 || a.mostUsedApps.indexOf('Mails') !== -1)
    return new Data('20 GB', '30Mbps', '10Mbps', calls, msgs, a.addons.TV,50)

  return new Data('unlimited', '100Mbps', '100Mbps', calls, msgs, a.addons.TV, 100)
}

class Final extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container">
        <br />
        <div className="col-4 slide-wrap">
          <div className="slide-wrap finisher">
            <br />
            {
              genTable(predict(this.props.data))
            }
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Final;
