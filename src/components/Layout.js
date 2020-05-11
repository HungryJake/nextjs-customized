import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Footer from './Footer';

const StyledMain = styled.main`
  clear: both;
  margin: 20px;
  padding: 20px;
`;

export default function Layout(props) {
  return (
    <div className="home">
      <Navigation />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </div>
  );
}
