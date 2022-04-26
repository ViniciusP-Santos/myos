
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />]
          <Route path="/home" exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
