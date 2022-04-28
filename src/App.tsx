import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />]
        <Route path="/home" exact component={Home} />
        <Route path="/Auth" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
