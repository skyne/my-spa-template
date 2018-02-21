import * as React from 'react';

import SideBarMenuItemView from './SideBarMenuItem.vue';

export default class SideBarMenuItem extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SideBarMenuItemView {...this.props} />
        );
    }
}
