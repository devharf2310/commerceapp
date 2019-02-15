import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Tabs, Tab } from 'react-md';
import '../MenuTabs/MenuTabs.scss';

class MenuTabs extends PureComponent {

  handleChange = (activeTabIndex , id) => {
    const { history } = this.props;

    history.replace(`${id}`);
  };

  getActiveTabIndex = () => {
      switch(true){
          case this.isRoutedPath("home"):
            return 0;
          case this.isRoutedPath("products"):
            return 1;
          case this.isRoutedPath("clients"):
            return 2;
          case this.isRoutedPath("contacts"):
            return 3;
        default:
            return 0;
      }
  }

  isRoutedPath = (path) =>  this.props.location.pathname
                            ? this.props.location.pathname.toUpperCase().includes(path.toUpperCase())
                            : false;

    render() {

      return (
        <Tabs
          mobile={false}
          tabId="documentation"
          className="documentation-tabs"
          onTabChange={this.handleChange}
          activeTabIndex={this.getActiveTabIndex()}
        >
          <Tab label="Home"     id="/" key="/" />
          <Tab label="Products" id="/products" key="/products" />
          <Tab label="Clients"  id="/clients" key="/clients" />
          <Tab label="Contact"  id="/contacts" key="/contacts" />
        </Tabs>
      );
    }
  }
  export default withRouter(MenuTabs);
