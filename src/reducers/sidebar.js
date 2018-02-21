const initalBaseState = {
    name: 'Main menu',
    menuItems: [
      {
        title: 'Dashboard',
        link: null,
        icon: 'dashboard',
        children: [
          {
            title: 'Submenu 1',
            link: '#',
            children: [],
            icon: 'sidebar-sub-link fa fa-circle-thin'
          },
          {
            title: 'Submenu 2',
            link: '#',
            children: [],
            icon: 'sidebar-sub-link fa fa-circle-thin'
          },
          {
            title: 'Submenu 3',
            link: '#',
            children: [],
            icon: 'sidebar-sub-link fa fa-circle-thin'
          }
        ],
        icon: 'fa fa-signal fa-fw',
        notificationCount: 19,
      }
    ]
  };

// import ACTIONS from '../actionTypes/toaster';


const initialState = Object.assign({}, initalBaseState);

export default function sidebarReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
