import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import config from "./config";

import Layout from "./components/Layout";
import Spinner from "./components/Spinner";

import AppContainer from "./containers/App";

const App = () => (
  <AppContainer>
    {(movieList, tvList) => (
      <Layout movieList={movieList} tvList={tvList}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route
                exact
                path={config.paths.homepage}
                component={lazy(() => import("./scenes/Homepage"))}
              />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    )}
  </AppContainer>
);

export default App;
