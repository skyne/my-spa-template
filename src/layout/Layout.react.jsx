import * as React from 'react';


import MenuBar from '../components/layout/menubar';
import SideBar from '../components/layout/sidebar';
import ContentWrapper from '../components/layout/contentWrapper';
import { BrowserRouter } from 'react-router-dom';

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <MenuBar />
          <SideBar />
          <ContentWrapper />
          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 0.0.0-dev
            </div>
            <strong>Copyright &copy; 2020 Skyne.</strong> All rights reserved.
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
