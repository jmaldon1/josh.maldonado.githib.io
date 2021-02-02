/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { useTracking } from './useTracking';

const Routes = () => {
  // Google Analytics
  useTracking();

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter basename="/josh.maldonado.githib.io">
      <Helmet
        titleTemplate="Josh Maldonado - %s"
        defaultTitle="Josh Maldonado"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Josh Maldonado's personal website" />
      </Helmet>

      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
