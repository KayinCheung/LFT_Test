import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Historical from './Historical'
import RealTime from './RealTime'

class Body extends Component {

  render() {
    
    return (
      <div>
        {this.props.view === 'historical' ? <Historical/> : <RealTime/>}

      </div>
    );
  }
}



const mapStateToProps = state => ({
    view: state.view.view

})

export default connect(mapStateToProps, {})(Body);
