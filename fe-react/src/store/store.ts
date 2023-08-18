import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';

const middleWares = [logger, thunk];

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
