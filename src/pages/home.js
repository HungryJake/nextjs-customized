import React, { Component } from 'react';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Heading />
        <article>This is my home.</article>
      </Layout>
    );
  }
}

export default Home;
