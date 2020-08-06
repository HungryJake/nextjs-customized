import React, { Component } from 'react';
import Heading from '../components/Heading';
import Layout from '../components/Layout';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <Heading />
        <article>This is (static) contact page.</article>
      </Layout>
    );
  }
}

export default Contact;
