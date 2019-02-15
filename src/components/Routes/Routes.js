import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Contacts from '../../pages/Contacts/Contacts';
import Clients from '../../pages/Clients/Clients';
import Products from '../../pages/Products/Products';

const Routes = ({location}) => (

    <Switch key={location.key}>
        <Route exact path="/" location={location} component={Home} />
        <Route path="/clients" location={location} component={Clients} />
        <Route path="/contacts" location={location} component={Contacts} />
        <Route exact path="/products" location={location} component={Products} />
        <Route path="/products/:category" location={location} component={Products} />
        <Route path="/products/:category" location={location} component={Products} />
        <Route path="/products/:category" location={location} component={Products} />
        <Route component={Home}/>
    </Switch>

    );

export default Routes;
