import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  text-align: right;
  span {
    color: red;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        A simple NextJS starter kit built with
        <span>&nbsp;❤</span>
      </StyledFooter>
    );
  }
}

export default Footer;
