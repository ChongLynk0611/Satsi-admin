import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import CategoriesPage from './pages/Categories/Categories';

import NavLeft from './components/NavLeft/NavLeft';

function Admin() {
    const match = useRouteMatch();

    return(
        <div className="Admin">
            <NavLeft />
            <Switch>
                <Route exact path={match.url} component={CategoriesPage} /> 
            </Switch>
        </div>
           
            
    )
}

export default Admin;