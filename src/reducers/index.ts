import { combineReducers } from 'redux';
import { enableMapSet } from 'immer';

import { loaderReducer } from './loader.reducers';
import appStateReducer from './appState.reducers';
import toasterReducer from './toaster';
import sideBarReducer from './sidebar';
import { devicesReducer } from './devices.reducers';

enableMapSet();

const appReducers = combineReducers({
  loader: loaderReducer,
  appState: appStateReducer,
  toaster: toasterReducer,
  sidebar: sideBarReducer,
  devices: devicesReducer
});

export default appReducers;
