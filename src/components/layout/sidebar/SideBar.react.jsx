import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SideBarView from './SideBar.vue';

export default class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <SideBarView />
            //     <li><Link to="/">Sandbox</Link></li>
            //     <li><Link to="/test">Test</Link></li>
            // </SideBarView>
        );
    }
}
