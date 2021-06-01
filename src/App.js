import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import Atm from "./pages/Atm";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/atm">
          <Atm />
        </Route>
        {/* <Route path="downloadfile">

        </Route>
        <Route path="downloadfiles">

        </Route>
        <Route path="testani">

        </Route>
        <Route path="testccni">

        </Route>
        <Route path="parsetrace">

        </Route>
        <Route path="parselog">

        </Route> */}
      </Switch>
    </Layout>
  );
}

export default App;
