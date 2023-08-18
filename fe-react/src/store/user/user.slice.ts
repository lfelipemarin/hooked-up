import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login as loginService } from '../../services/login';
import { User, UserLogin } from './user.type';

export interface UserState {
  currentUser: User | string | undefined | null;
  loggedIn: boolean;
  error: string | undefined | null;
  loading: boolean;
}

const initialState: UserState = {
  currentUser: undefined,
  error: undefined,
  loading: false,
  loggedIn: false
};

// Async thunk for fetching data
export const doLogin = createAsyncThunk<User, UserLogin>(
  'user/fetchUser',
  async (user) => {
    const data = await loginService(user);
    return data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doLogin.fulfilled, (state, action: PayloadAction<User>) => {
        console.log('====================================Payload');
        console.log(action.payload);
        console.log('====================================');
        state.loading = false;
        state.currentUser = action.payload; // This line might cause the error
        state.error = null;

      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.currentUser = null;
        state.error = action.payload as string;
      });
  }
});

export default userSlice.reducer;
