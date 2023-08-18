import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login as loginService } from '../../services/login';
import { User, UserLogin } from '../user/user.type';

export interface UserState {
  currentUser: User | string | undefined | null;
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
// TODO [2023-12-25]: refactor this code and move it to auth.slice.ts
export const doLogin = createAsyncThunk<User, UserLogin>(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await loginService(user);
      const token = response.headers.get('Authorization')?.split(' ')[1] ?? null;
      if (token) {
        thunkAPI.dispatch(setToken(token));
      }
      const currentUser = await response.json();
      return currentUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      state.loggedIn = !!action.payload;
      localStorage.setItem('appToken', state.token as string);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doLogin.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.currentUser = null;
        state.error = action.payload as string;
      });
  }
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
