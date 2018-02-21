import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBarMenuGroup from './SideBarMenuGroup';
import SideBarSubMenuGroup from './SideBarSubMenuGroup';
import SideBarMenuItem from './SideBarMenuItem';

import SideBarView from './SideBar.vue';

class SideBar extends React.Component {
    constructor(props){
        super(props);
    }

    renderSingleMenuItemLink(menuItem) {
        return (
            <Link data-slot="link" to={menuItem.link || '#'} activeClassName="active">
                {menuItem.icon ?
                    <i className={'fa fa-' + menuItem.icon}></i>
                :
                    null
                }
                <span>
                    {menuItem.title}
                </span>
            </Link>
        );
    }

    renderMenu(menuItem){
        const LinkDOM = this.renderSingleMenuItemLink(menuItem);
        if(menuItem.children && menuItem.children.length > 0) {
            const children = menuItem.children.map((child) => {
                return this.renderMenu(child);
            });
            children.unshift(LinkDOM);
            return (
                <SideBarSubMenuGroup key={menuItem.title}>
                    {children}
                </SideBarSubMenuGroup>
            );
        }
        else {
            return (
                <SideBarMenuItem key={menuItem.title}>
                    {this.renderSingleMenuItemLink(menuItem)}
                </SideBarMenuItem>
            );
        }
    }

    render(){
        const sidebar = this.props.sidebar;
        if(sidebar) {
            return (
                <SideBarView>
                    <SideBarMenuGroup>
                        {sidebar.menuItems && sidebar.menuItems.length > 0 ?
                            sidebar.menuItems.map((menuItem) => {
                                return this.renderMenu(menuItem);
                            })
                        :
                            null
                        }
                    </SideBarMenuGroup>
                </SideBarView>
                //     <li><Link to="/">Sandbox</Link></li>
                //     <li><Link to="/test">Test</Link></li>
                // </SideBarView>
            );
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = function(state) {
    return {
        sidebar: state.sidebar
    };
};

export default connect(mapStateToProps)(SideBar);
