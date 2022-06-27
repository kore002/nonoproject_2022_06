import React from 'react';
//import PropTypes from 'prop-types';
//import axios from 'axios';
//import Movie from './components/Movie';

import './App.css';
import {/*HashRouter*/ Route, BrowserRouter, withRouter} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Login from './routes/Login';
  const BaseRouter = withRouter(({ location} ) => {

    return (
      <div>
          { location.pathname !== '/' && <Navigation/>}
          <Route path="/" exact={true} component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movie-detail"component={Detail}/>
      </div>
  
    )
  })
  
  function App() {
    
    return (
      // BrowserRouter로 감싸준다. 이렇게 한번 BaseRouter를 감싸는 이유는, BaseRouter에서 withRouter를 활용하기 위해서는 BrowserRouter 등의 Component안에서 BaseRouter가 사용되어야 하기 때문이다.
      <BrowserRouter>
        <BaseRouter/>
      </BrowserRouter>
    );
  }

export default App;
