import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuBar from '../components/layout/menubar';
import SideBar from '../components/layout/sidebar';
import ContentWrapper from '../components/layout/contentWrapper';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
                <Router>
                    <div className="wrapper">
                        <MenuBar />
                        <SideBar />
                        <ContentWrapper />
                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                            <b>Version</b> 2.0
                            </div>
                            <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
                        </footer>
                    </div>
                </Router>
        );
    }
}
