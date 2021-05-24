import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import './App.css';

const Admin =  React.lazy(() => import('./features/Admin'));



function App() {
  return (
    <Router>
      <Switch>
        <React.Suspense fallback={<div>loading....</div>}>
 
          <Route path="/" component={Admin}/>
        </React.Suspense>
      </Switch>
    </Router>
  );
}

export default App;
