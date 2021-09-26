import React from "react";

import "./App.css";
import { RecoilRoot } from "recoil";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import IndexPage from "./pages/index";
import CounterPage from "./pages/counter";

function App(): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/counter" component={CounterPage} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
