import React, { Component } from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { callPingApi, resetPing } from '../actions/ping.action';

class ServerTest extends Component {
  callPing() {
    const { ping } = this.props;
    ping();
  }

  // no effect, form control is already disabled
  resultChanged() {}

  onReset() {
    const { resetPing } = this.props;
    resetPing();
  }

  render() {
    let { result } = this.props;
    result = result ? result : '';
    return (
      <Layout>
        <button onClick={this.callPing.bind(this)}>Call Ping</button>
        <input value={result} onChange={this.resultChanged.bind(this)} disabled={true} />
        <button onClick={this.onReset.bind(this)}>Reset</button>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    result: state.ping.result
  }),
  {
    ping: callPingApi,
    resetPing
  }
)(ServerTest);
