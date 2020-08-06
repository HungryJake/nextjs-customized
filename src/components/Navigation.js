import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyleNavLeftSection = styled.ul`
  float: left;
  padding: 0;
  margin: 0;
`;

const StyledNavItem = styled.li`
  list-style: none;
  padding: none;
  margin: 0 20px;
  display: inline-block;
`;

const StyledNavHome = styled.div`
  float: right;
  display: inline-block;
`;

class Navigation extends Component {
  render() {
    return (
      <>
        <div className="navigation">
          <StyleNavLeftSection>
            <StyledNavItem>
              <Link href="/counter">
                <a>Redux Counter</a>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/call_server">
                <a>Test Server API</a>
              </Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link href="/contact">
                <a>Contact(static)</a>
              </Link>
            </StyledNavItem>
          </StyleNavLeftSection>
          <StyledNavHome>
            <Link href="/">
              <a>Home</a>
            </Link>
          </StyledNavHome>
        </div>
        <style jsx>{`
          .navigation {
            display: block;
            width: 100%;
            padding: 10px 20px;
          }
        `}</style>
      </>
    );
  }
}

export default Navigation;
