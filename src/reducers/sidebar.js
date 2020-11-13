const initalBaseState = {
  name: 'Main menu',
  menuItems: [
    {
      title: 'Submenu 1',
      link: '',
      children: [],
      icon: 'sidebar-sub-link fa fa-circle-thin'
    },
    {
      title: 'Devices',
      link: 'devices',
      children: [],
      icon: 'sidebar-sub-link fa fa-circle-thin'
    },
    {
      title: 'Submenu 3',
      link: '#',
      children: [],
      icon: 'sidebar-sub-link fa fa-circle-thin'
    },
    {
      title: 'Dashboard',
      link: null,
      icon: 'fa fa-signal fa-fw',
      children: [

      ],
      notificationCount: 19
    }
  ]
};

const initialState = Object.assign({}, initalBaseState);

export default function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
