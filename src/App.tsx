import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { OrderServices } from "./pages/OrderServices";

import { AuthContextProvider } from "./contexts/AuthContext";
import SimpleSidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Auth} />]
          <SimpleSidebar>
            <Route path="/home" exact component={Home} />
            <Route path="/orderservices" exact component={OrderServices} />
          </SimpleSidebar>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
