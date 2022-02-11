import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Recipe from './components/recipes/Recipe';
import Footer from './components/layout/Footer';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipe/:id' component={Recipe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
