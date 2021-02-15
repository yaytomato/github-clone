import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import New from "./pages/New";

interface Props {}

export const App: React.FC<Props> = ({}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new" exact component={New} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
