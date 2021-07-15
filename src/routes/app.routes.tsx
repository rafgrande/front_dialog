import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact  component={Home}/>
            <Route path='/profile/:_id' exact  component={Profile}/>
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;