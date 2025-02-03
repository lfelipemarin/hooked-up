// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';
import themeReducer from './app/app.slice';
import navbarReducer from './navbar/navbar.slice'

const middleWares = [logger, thunk];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    navBar: navbarReducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleWares
  ],
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
