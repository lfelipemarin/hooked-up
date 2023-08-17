import { User } from './user.type';

export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  LOG_OUT = 'LOG_OUT',
  FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
  FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
}

interface ActionSetCurrentUser {
  type: ActionTypes.SET_CURRENT_USER;
  payload: User;
}

interface ActionLogOutUser {
  type: ActionTypes.LOG_OUT;
  payload: User;
}

export interface FetchDataRequestAction {
  type: ActionTypes.FETCH_DATA_REQUEST;
}

export interface FetchDataFailureAction {
  type: ActionTypes.FETCH_DATA_FAILURE;
  error: string;
}

export type UserAction =
  | FetchDataFailureAction
  | FetchDataRequestAction
  | ActionSetCurrentUser
  | ActionLogOutUser;
