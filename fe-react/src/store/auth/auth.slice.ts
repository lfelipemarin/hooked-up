/* eslint-disable @typescript-eslint/no-use-before-define */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login as loginService } from '../../services/login';
import { User, UserLogin } from '../user/user.type';

export interface UserState {
  currentUser: User | undefined;
  loggedIn: boolean;
  error: string | undefined | null;
  loading: boolean;
  token: string | undefined | null;
}

const initialState: UserState = {
  currentUser: undefined,
  error: undefined,
  loading: false,
  loggedIn: false,
  token: undefined
};

export const doLogin = createAsyncThunk<User, UserLogin>(
  'user/doLogin',
  async (user, thunkAPI) => {
    try {
      const response = await loginService(user);
      const token =
        response.headers.get('Authorization')?.split(' ')[1] ?? undefined;
      if (token) {
        thunkAPI.dispatch(setToken(token));
      }
      const currentUser = await response.json();
      return currentUser;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      const newToken = action.payload;
      state.token = newToken;
      state.loggedIn = !!newToken;
      localStorage.setItem('appToken', newToken ?? '');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(doLogin.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = undefined;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.currentUser = undefined;
        state.error =
          action.payload && typeof action.payload === 'string'
            ? action.payload
            : 'An error occurred';
      });
  }
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
