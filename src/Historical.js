import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getHistorical } from './actions/GetHistoricalPrice'
import { setThreshold } from './actions/setThreshold'
import Ticker from './Ticker'
import ThresholdInput from './ThresholdInput'

let pageSize = 120

class Historical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }

    }

    componentDidMount() {
        this.props.getHistorical()
    }

    render() {
        if (this.props.loading === true) return null

        let start = generateTime(this.props.startTime)
        let end = generateTime(this.props.endTime)

        let [left5s, left30s, right5s, right30s] = ['< Prev', '<< Prev 10%', 'Next >', 'Skip 10%>>']
        let prices = this.props.data

        let totalPage = Math.ceil(this.props.data.length / pageSize)

        let toDisplay = prices.slice((this.state.page * pageSize), (this.state.page + 1) * pageSize)

        let pageStartTime = generateTime(toDisplay[0]['time'])
        let pageEndTime = generateTime(toDisplay[toDisplay.length - 1]['time'])
        console.log(pageStartTime)
        return (
            <div className="container is-centered">
                <div>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <ThresholdInput />

                            </div>
                            <div className="level-item">
                                Current Threshold: {this.props.threshold}
                            </div>
                        </div>
                        <div className="level-item">
                            <button className="button is-primary" onClick={() => this.props.getHistorical()}>Reload Historical Data</button>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="buttons is-centered">
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.max(this.state.page - Math.round(totalPage / 10), 0) })}>{left30s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.max(this.state.page - 1, 0) })}>{left5s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.min(this.state.page + 1, totalPage - 1) })}>{right5s}</button>
                                    <button className="button is-primary" onClick={() => this.setState({ page: Math.min(this.state.page + Math.round(totalPage / 10), totalPage - 1) })}>{right30s}</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <br />
                <div>
                    Historical Data available: {start} to {end}<br /><br />

                    Time range of current page: {pageStartTime} to {pageEndTime}<br />
                    Page {this.state.page + 1} of {totalPage}<br /><br />
                </div>
                <div className="columns is-flex is-multiline">
                    {Object.keys(toDisplay).map((i) => (
                        <div className="column is-1" key={`column${i}`}>
                            <Ticker key={i} ticker={toDisplay[i]['symbol']} price={toDisplay[i]['price']} threshold={this.props.threshold} />
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}

const generateTime = (epoch) => {
    let time = new Date(epoch * 1000)
    return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`
}

const pad = (second) => {
    if (second < 10) second = '0' + second
    return second
}



const mapStateToProps = state => ({
    data: state.historical.data,
    startTime: state.historical.startTime,
    endTime: state.historical.endTime,
    loading: state.historical.loading,
    threshold: state.threshold.threshold

})

export default connect(mapStateToProps, { getHistorical, setThreshold })(Historical);
