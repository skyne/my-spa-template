import * as React from 'react';

import * as SideBarSubMenuGroupView from './SideBarSubMenuGroup.vue';

export default class SideBarSubMenuGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, ...restProps } = this.props;
        return (
            <SideBarSubMenuGroupView {...restProps}>
                {children}
            </SideBarSubMenuGroupView>
        );
    }
}
