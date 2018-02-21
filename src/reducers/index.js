import { combineReducers } from 'redux';
import loaderReducer from './loader.reducers';
import appStateReducer from './appState.reducers';
import toasterReducer from './toaster';
import sideBarReducer from './sidebar';

const appReducers = combineReducers({
    loader: loaderReducer,
    appState: appStateReducer,
    toaster: toasterReducer,
    sidebar: sideBarReducer
});

export default appReducers;
