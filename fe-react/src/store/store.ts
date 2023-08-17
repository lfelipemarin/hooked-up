import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const middleWares = [logger, thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
