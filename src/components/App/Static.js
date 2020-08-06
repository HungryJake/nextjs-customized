import React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';

/**
 * Use only client side redux
 */
function StaticApp({ children }) {
  return (
    <>
      <Helmet>
        <title>Title for (Static Pages)</title>
        <meta property="og:title" content={'Title for (Static Pages)'} />
      </Helmet>
      {children}
    </>
  );
}

export default withRouter(StaticApp);
