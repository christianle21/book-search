import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import searchBooks from './pages/searchBooks';
import savedBooks from './pages/savedBooks';
import Navbar from './components/navbar';

function app() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={searchBooks} />
          <Route exact path='/saved' component={savedBooks} />
          <Route render={() => <h1 className='display-2'>Oops! Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default app;