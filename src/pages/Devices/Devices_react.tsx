import * as React from 'react';
import { connect } from 'react-redux';

import { showLoader } from '../../reducers/loader.reducers';

import withLoader from '../../components/loader';
import withToaster from '../../components/toaster';
import { fetchDevices, registerDevice } from '../../reducers/devices.reducers';
import { DeviceDTO } from 'api';

//@ts-ignore
import * as DevicesView from './Devices.vue';

interface DevicesProps {
  devices: DeviceDTO[];
}

interface DevicesActions {
  showLoader;
  fetchDevices;
  registerDevice;
}

class Devices extends React.Component<DevicesProps & DevicesActions, any> {

    private view: any;
    private devices: any;

    constructor(props: any) {
      super(props);
      this.state = {
        counter: 0
      };

      this.view = withToaster(withLoader(DevicesView), 'DevicesView');
    }

    componentWillMount(): void {

      this.props.fetchDevices();

    }

  increment = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render(): JSX.Element {
    const View = this.view;

    return (
      <View showLoader={this.props.showLoader} devices={this.props.devices} registerDevice={this.props.registerDevice} />
    );
  }
}

const mapStateToProps = (state) => ({
  devices: state.devices.devices
});

const dispatchProps: DevicesActions = {
  showLoader,
  fetchDevices,
  registerDevice
};

export default connect(mapStateToProps, dispatchProps)(Devices);
