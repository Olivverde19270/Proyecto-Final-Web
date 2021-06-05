import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

