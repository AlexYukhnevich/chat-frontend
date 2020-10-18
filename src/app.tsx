import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './routes/routes';
import { PublicRoute, ProtectedRoute } from './components/Routes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <ErrorBoundary>
            <div>CHILDREN</div>
          </ErrorBoundary>
        </Switch>
      </div>
    </Router>
  )
}

export default App;