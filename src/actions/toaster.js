import ACTIONS from '../actionTypes/toaster';

export const addMessage = (name, type, message) => {
  return {
    type: ACTIONS.ADD_MESSAGE,
    componentName: name || 'global',
    messageType: type,
    message
  };
};

export const hideMessage = (name, key) => {
  return {
    type: ACTIONS.HIDE_MESSAGE,
    componentName: name || 'global',
    messageKey: key
  };
};

export const initializeComponentToaster = (name) => {
  return {
    type: ACTIONS.INITIALIZE_COMPONENT_TOASTER,
    componentName: name || 'global'
  };
};

export const deinitComponentToaster = (name) => {
  return {
    type: ACTIONS.DEINITIALIZE_COMPONENT_TOASTER,
    componentName: name || 'global'
  };
};
