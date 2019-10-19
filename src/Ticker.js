import React from 'react';
export default class Ticker extends React.PureComponent {
    render() {
      return (
        <div className={this.props.price < this.props.threshold ? `has-background-danger has-text-white` : 'has-background-success'}>
          {this.props.ticker} :<br /> {this.props.price}
        </div>
      );
    }
  }
  