import React, { Component } from "react";
import { Route } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import NavLink from './components/NavItemLink/NavItemLink';
import MenuTabs from './components/MenuTabs/MenuTabs';
import Routes from './components/Routes/Routes';
import Constants from './utils/Constants';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';

import "./App.scss";

const { navItems } = Constants;


class App extends Component {
    handleVisibilityChange = () => { }
    render() {
     return (
        <ErrorBoundary>
            <Route
                render={({ location }) => (
                <NavigationDrawer
                    drawerTitle="Categories"
                    visible={location.pathname && location.pathname.startsWith("/products")}
                    onVisibilityChange={this.handleVisibilityChange}
                    toolbarChildren={<MenuTabs/>}
                    navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
                >
                <Routes location={location}/>
                </NavigationDrawer>
                )}
            />
        </ErrorBoundary>
    );
  }
}

 export default App;
