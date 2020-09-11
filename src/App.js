import React from 'react';
import './App.css';
import Login from './Components/login/Login';
import { BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import Dashboard from './Components/dashboard/Dashboard';
import About from './Components/about/About';
import Team from './Components/team/Team';

  function App() {
   return (
       <Router>
        <div>
           <switch>
           <Route exact path='/' component={Login} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/dashboard' component={Dashboard}/>
           <Route exact path='/about' component={About}/>
           <Route exact path='/team' component={Team}/>
           </switch>
         </div>
       </Router>
  );
}

export default App;
