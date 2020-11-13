import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiClient, DeviceDTO } from '../api';
import { AppThunk } from '../store';

export interface DevicesState {
    devices?: DeviceDTO[];
    isLoading: boolean;
    error: string | null;
}

const devicesInitialState: DevicesState = { devices: undefined, isLoading: false, error: null };

const startLoading = (state: DevicesState): void => {
  state.isLoading = true;
};

const loadingFailed = (state: DevicesState, action: PayloadAction<string>): void => {
  state.isLoading = false,
  state.error = action.payload;
};

const devices = createSlice({
  name: 'devices',
  initialState: devicesInitialState,
  reducers: {
    getDevicesStart: startLoading,
    getDevicesSuccess(state, { payload }: PayloadAction<DeviceDTO[]>): void {
      state.devices = payload;
      state.isLoading = false;
      state.error = null;
    },
    getDevicesFailure: loadingFailed,
    registerDeviceStart: startLoading,
    registerDeviceSuccess(state: DevicesState): void {
      state.isLoading = false;
      state.error = null;
    },
    registerDeviceFailure: loadingFailed
  }
});

export const {
  getDevicesStart,
  getDevicesSuccess,
  getDevicesFailure,
  registerDeviceStart,
  registerDeviceSuccess,
  registerDeviceFailure
} = devices.actions;

export const devicesReducer = devices.reducer;


export const fetchDevices = (): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(getDevicesStart());
    const api = new ApiClient();
    const result = await api.listDevices();
    dispatch(getDevicesSuccess(result));
  } catch (err) {
    dispatch(getDevicesFailure(err.toString()));
  }
};

export const registerDevice = (ipAddress: string): AppThunk => async (dispatch): Promise<void> => {
  try {
    dispatch(registerDeviceStart());
    const api = new ApiClient();
    await api.register(ipAddress);
    dispatch(registerDeviceSuccess());
    fetchDevices();
  } catch (err) {
    dispatch(registerDeviceFailure(err.toString()));
  }
};
