import * as React from 'react';
import { connect } from 'react-redux';

import { showLoader } from '../../reducers/loader.reducers';

//@ts-ignore
import * as SandboxView from './Sandbox.vue';
import withLoader from '../../components/loader';
import withToaster from '../../components/toaster';
import { fetchDevices, registerDevice } from '../../reducers/devices.reducers';
import { DeviceDTO } from 'api';

interface SandboxProps {
  isAppInitializing: boolean;
  devices: DeviceDTO[];
}

interface SandboxActions {
  showLoader;
  fetchDevices;
  registerDevice;
}

class Sandbox extends React.Component<SandboxProps & SandboxActions, any> {

    private view: any;
    private devices: any;

    constructor(props: any) {
      super(props);
      this.state = {
        counter: 0
      };
    }

    componentWillMount(): void {
      this.view = withToaster(withLoader(SandboxView), 'SandboxView');
      this.props.fetchDevices();

    }

  increment = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render(): JSX.Element {
    const View = this.view;

    return (
      <View msg={'Hello' + this.state.counter} isAppInitializing={this.props.isAppInitializing} onClick={this.increment} showLoader={this.props.showLoader} >
        {/* <LazyLoadedImage width="800px" height="600px" src="./user3-128x128.jpg" /> */}
      </View>
    );
  }
}

const mapStateToProps = (state): SandboxProps => ({
  devices: state.devices.devices,
  isAppInitializing: state.appState.isAppInitializing
});

const dispatchProps: SandboxActions = {
  showLoader,
  fetchDevices,
  registerDevice
};

export default connect(mapStateToProps, dispatchProps)(Sandbox);
