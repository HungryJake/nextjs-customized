import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from '../../createStore';
import { withRouter } from 'next/router';

/**
 * DynamicApp Component
 * @param Component
 * @param pageProps
 * @param router
 * @param store
 * @returns {*}
 * @constructor
 */
const DynamicApp = ({ Component, pageProps, router, store }) => {
  return (
    <Provider store={store}>
      <Component router={router} {...pageProps} />
    </Provider>
  );
};

export default withRedux(createStore)(withRouter(DynamicApp));
