import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
//import rootReducer, { RootState } from './rootReducer'

export type AppThunk = ThunkAction<void, any, unknown, Action<string>>

