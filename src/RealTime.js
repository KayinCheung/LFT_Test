import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getUpdateFreq } from './actions/getUpdateFreq'
import { setUpdateFreq } from './actions/setUpdateFreq'
import { setThreshold } from './actions/setThreshold'
import Ticker from './Ticker'
import ThresholdInput from './ThresholdInput'


class RealTime extends Component {

  componentDidMount() {
    this.props.getUpdateFreq()
  }

  render() {
    let prices = this.props.allData
    return (
      <div className="container is-centered">
        <div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <ThresholdInput/>
              </div>
              <div className="level-item">
                Current Threshold: {this.props.threshold}
              </div>

            </div>

            <div className="level-right">
              <div className="level-item">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" id="setFreq" type="number" name="search" placeholder="Set Update Frequency (ms)" />
                  </div>

                  <div className="control">
                    <button className="button is-primary" type="submit" name="button"
                      onClick={() => this.props.setUpdateFreq(document.getElementById("setFreq").value)}>Update</button>
                  </div>
                </div>
              </div>
              <div className="level-item">
                Current Update Freq: {this.props.updateFreq}ms
              </div>
            </div>
          </nav>
        </div>
        <div>
        </div>

        Showing last {prices.length} elements

        <div className="columns is-flex is-multiline">

          {Object.keys(prices).map((i) => (
            <div className="column is-1" key={`${i}${prices[i][0]}${prices[i][1]}`}>
              <Ticker key={`${i}${prices[i][0]}${prices[i][1]}`} 
                      ticker={prices[i][0]} price={prices[i][1]}
                      threshold={this.props.threshold} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  allData: state.price.data,
  currentPageData: state.price.currentPageData,
  page: state.price.page,

  updateFreq: state.freq.freq,

  threshold: state.threshold.threshold
})

export default connect(mapStateToProps, { getUpdateFreq, setUpdateFreq, setThreshold })(RealTime);
