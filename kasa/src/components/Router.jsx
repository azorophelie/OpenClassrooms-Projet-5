import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;