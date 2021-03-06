import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import config from './config';

import Layout from './components/Layout';
import Spinner from './components/Spinner';

import AppContainer from './containers/App';

const App = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Poodle Movies</title>
    </Helmet>
    <Router>
      <Suspense fallback={<Spinner />}>
        <AppContainer>
          {(movieList, tvList) => (
            <Layout movieList={movieList} tvList={tvList}>
              <Switch>
                <Route
                  exact
                  path={config.paths.homepage}
                  component={lazy(() => import('./scenes/Homepage'))}
                />
                <Route
                  exact
                  path={config.paths.genre}
                  component={lazy(() => import('./scenes/Genre'))}
                />
                <Route
                  exact
                  path={config.paths.movie}
                  component={lazy(() => import('./scenes/Movie'))}
                />
                <Route
                  exact
                  path={config.paths.tv}
                  component={lazy(() => import('./scenes/TV'))}
                />
              </Switch>
            </Layout>
          )}
        </AppContainer>
      </Suspense>
    </Router>
  </>
);

export default App;
