import * as React from 'react';
import { Route, Switch } from 'react-router';
import Sandbox from '../../../pages/Sandbox';
import Devices from '../../../pages/Devices';

import ContentWrapperView from './ContentWrapper.vue';

export default class ContentWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentWrapperView>
        <Switch>
          <Route path="/devices" component={Devices}/>
          <Route exact path="/" component={Sandbox}/>
        </Switch>
      </ContentWrapperView>
    );
  }
}
