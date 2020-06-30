import App from 'next/app';
import React from 'react';
import '../styles/normalize.css';
import '../styles/main.css';
import '../styles/main.sass';
import DynamicApp from '../components/App/Dynamic';
import StaticApp from '../components/App/Static';
import routeConfig from '../../config/app-routes.json';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const isStaticPage = routeConfig[router.pathname]
      ? !!routeConfig[router.pathname].static
      : false;
    return (
      <>
        {isStaticPage && (
          <StaticApp>
            <Component {...pageProps} />
          </StaticApp>
        )}
        {!isStaticPage && <DynamicApp Component={Component} pageProps={pageProps} />}
      </>
    );
  }
}
