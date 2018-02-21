import * as React from 'react';

import SideBarMenuGroupView from './SideBarMenuGroup.vue';

export default class SideBarMenuGroup extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render(){
        const { children, ...restProps } = this.props;
        return (
            <SideBarMenuGroupView {...restProps} >
                {children}
            </SideBarMenuGroupView>
        );
    }
}
