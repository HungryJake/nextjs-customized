import React from 'react';
import { Helmet } from 'react-helmet';
import { createWrapper } from 'next-redux-wrapper';
import { withRouter } from 'next/router';
import reduxStore from '../../reduxStore';

/**
 * DynamicApp Component
 * @param Component
 * @param pageProps
 * @param router
 * @param store
 * @returns {*}
 * @constructor
 */
const DynamicApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Helmet>
        <title>Title for (Dynamic Pages)</title>
        <meta property="og:title" content={'Title for (Dynamic Pages)'} />
      </Helmet>
      <Component router={router} {...pageProps} />
    </>
  );
};

export default createWrapper(reduxStore).withRedux(withRouter(DynamicApp));
