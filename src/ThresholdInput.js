import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setThreshold } from './actions/setThreshold'

class ThresholdInput extends Component {
    render() {
        return (
            <div className="field has-addons">
                <div className="control">
                    <input className="input" id="setThreshold" type="number" name="search" placeholder="Set Threshold" />
                </div>

                <div className="control">
                    <button className="button is-primary" type="submit" name="button"
                        onClick={() => this.props.setThreshold(document.getElementById("setThreshold").value)}>Update</button>
                </div>
            </div>
        )
    }



}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { setThreshold })(ThresholdInput);
