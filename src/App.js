import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {useSelector} from 'react-redux';
import Home from './components/Home/Home';
function App() {
  const state = useSelector(state => state.UserReducer);
  return (
    <div className="App">
      <header className="App-header">

      <Router>
      
        <Switch>
            <Route path="/" exact>
            {/* {users ? <Home/> : <Login/>}  */}
            {state.user ? <Home/> : <Login/> }
            </Route>
            <Route path="/Register">
                <Register/>
               
            </Route>
        </Switch>
      </Router>

      </header>
    </div>
  );
}

export default App;
