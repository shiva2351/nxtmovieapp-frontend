import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
