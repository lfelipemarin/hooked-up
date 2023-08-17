import { ActionTypes, UserAction } from './user.action.types';
import { User } from './user.type';

export interface UserState {
  currentUser: User | undefined;
  loggedIn: boolean;
  error: string | undefined;
  loading: boolean;
}

const INITIAL_STATE = {
  currentUser: undefined,
  error: undefined,
  loading: false,
  loggedIn: false
};

export const userReducer = (
  action: UserAction,
  state: UserState = INITIAL_STATE
): UserState => {
  // const { type } = action;
  // eslint-disable-next-line unicorn/consistent-destructuring
  switch (action?.type) {
    case ActionTypes.FETCH_DATA_REQUEST: {
      return {
        ...state,
        error: undefined,
        loading: true
      };
    }
    case ActionTypes.SET_CURRENT_USER: {
      const { payload } = action;
      return {
        ...state,
        currentUser: payload,
        loading: false,
        loggedIn: true
      };
    }
    case ActionTypes.FETCH_DATA_FAILURE: {
      const { error } = action;
      return {
        ...state,
        currentUser: undefined,
        error,
        loading: false,
        loggedIn: false
      };
    }
    case ActionTypes.LOG_OUT: {
      return { ...state, currentUser: undefined, loggedIn: false };
    }
    default: {
      console.log('====================================');
      console.log(state);
      console.log('====================================');
      return { ...state };
    }
  }
};
