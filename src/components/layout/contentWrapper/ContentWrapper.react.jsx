import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sandbox from '../../../pages/Sandbox';

import ContentWrapperView from './ContentWrapper.vue';

export default class ContentWrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ContentWrapperView>
                <Switch>
                    <Route exact path="/" component={Sandbox}/>
                    <Route path="/test" render={() => (
                        <h3>Please select a topic.</h3>
                    )}/>
                </Switch>
            </ContentWrapperView>
        );
    }
}
