import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <>
        <h2 className="heading">Welcome...</h2>
        <style jsx>{`
          .heading {
            display: block;
            width: 100%;
          }
          .logo {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX:(-50%), translateY:(-50%);
          }
        `}</style>
      </>
    );
  }
}

export default Heading;
