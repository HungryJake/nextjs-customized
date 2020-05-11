import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../actions/counter.action';

const Counter = (props) => {
  const { count, increaseCounter, decreaseCounter, resetCounter } = props;
  return (
    <Layout>
      <div>{count}</div>
      <div>
        <button onClick={increaseCounter}>Up</button>
        <button onClick={decreaseCounter}>Down</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increaseCounter: increase,
  decreaseCounter: decrease,
  resetCounter: reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
