import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ComponentLoaderState {
    isVisible: boolean;
}

const initialLoaderState: ComponentLoaderState = {
  isVisible: false
};

type LoaderState = Map<string, ComponentLoaderState> ;

const initialState: LoaderState = (new Map([['global', { isVisible: false } as ComponentLoaderState]]) as unknown) as LoaderState;

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader(state: LoaderState, { payload }: PayloadAction<string>): void {
      state.set(payload, { isVisible: true });
    },
    hideLoader(state: LoaderState, { payload }: PayloadAction<string>): void {
      state.set(payload, { isVisible: false });
    },
    initializeComponentLoader(state, { payload }: PayloadAction<string>): void {
      state.set(payload, initialLoaderState);
    },
    removeComponentLoader(state, { payload }: PayloadAction<string>): void {
      state.delete(payload);
    }
  }
});

export const {
  showLoader,
  hideLoader,
  initializeComponentLoader,
  removeComponentLoader
} = loader.actions;

export const loaderReducer = loader.reducer;
