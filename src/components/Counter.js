import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Just counter</h2>
        <button onClick={this.decrement}> - </button> {this.state.count} <button onClick={this.increment}> + </button>
      </div>
    );
  }
}
