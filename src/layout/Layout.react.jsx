import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuBar from '../components/layout/menubar';
import SideBar from '../components/layout/sidebar';
import Sandbox from '../pages/Sandbox';

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

                        <div className="content-wrapper" style={{ minHeight: '1068px' }}>
                            <section className="content-header">
                            <h1>
                                Dashboard
                                <small>Version 2.0</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                <li className="active">Dashboard</li>
                            </ol>
                            </section>

                            <section className="content">
                                <Switch>
                                    <Route exact path="/" component={Sandbox}/>
                                    <Route path="/test" render={() => (
                                        <h3>Please select a topic.</h3>
                                    )}/>
                                </Switch>
                            </section>
                        </div>
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
