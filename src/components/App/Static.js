import React from 'react';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import createStore from '../../createStore';

/**
 * Use only client side redux
 */
function StaticApp({ children }) {
  return <Provider store={createStore()}>{children}</Provider>;
}

export default withRouter(StaticApp);
