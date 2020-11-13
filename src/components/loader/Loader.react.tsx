import * as React from 'react';
import { connect } from 'react-redux';

import { showLoader, hideLoader, initializeComponentLoader, removeComponentLoader } from '../../reducers/loader.reducers';

//@ts-ignore
import LoaderView from './Loader.vue';

let Store = {};
export const setStore = (store): void => {
  Store = store;
};

interface LoaderProps {
    isLoaderVisible: boolean;
}

class Loader extends React.PureComponent<LoaderProps> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.isLoaderVisible ?
        <LoaderView />
        :
        null
    );
  }
}

interface LoaderWrapperState {
    wrappedComponentName: string;
}

export const withLoader = (WrappedComponent, key?: string): any => {
  return class WithLoader extends React.Component<any, any> {

        mappedWrappedComponent: any;
        connectedLoader: any;

        constructor(props) {
          super(props);
          const wrappedComponentName = key || WrappedComponent.name;
          this.state = {
            wrappedComponentName
          };

          //@ts-ignore
          Store.dispatch(initializeComponentLoader(this.state.wrappedComponentName));

          const mapStateToProps = (state: any) => ({
            isLoaderVisible: state.loader.get(this.state.wrappedComponentName).isVisible
          });


          this.connectedLoader = connect((state) => (mapStateToProps))(Loader);
          this.mappedWrappedComponent = connect(null, {
            showLoader: () => showLoader(this.state.wrappedComponentName),
            hideLoader: () => hideLoader(this.state.wrappedComponentName)
          })(WrappedComponent);
        }

        render() {
          const ConnectedLoader = this.connectedLoader;
          const MappedWrappedComponent = this.mappedWrappedComponent;
          return (
            <div className="loader-container">
              <ConnectedLoader />
              <MappedWrappedComponent {...this.props} />
            </div>
          );
        }

        componentWillUnmount() {
          //@ts-ignore
          Store.dispatch(removeComponentLoader(this.state.wrappedComponentName));
        }
  };
};
