/* eslint-disable arrow-body-style */
import { Dispatch } from 'redux';
import { login as loginService } from '../../services/login';
import { ActionTypes, UserAction } from './user.action.types';
import { UserLogin } from './user.type';

// eslint-disable-next-line operator-linebreak
export const loginUser = (user: UserLogin) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const response = await loginService(user);
      dispatch({
        type: ActionTypes.SET_CURRENT_USER,
        payload: response
      });
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.FETCH_DATA_FAILURE,
          error: error.message
        });
      } else {
        console.error('Unknown error occurred.');
      }
    }
  };
};
