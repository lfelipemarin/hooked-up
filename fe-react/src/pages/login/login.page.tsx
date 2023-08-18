import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { RootState } from '../../store/store';
import { doLogin } from '../../store/user/user.slice';
import { User } from '../../store/user/user.type';
import './login.styles.scss';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state: RootState) => state.user.currentUser as User);

  const handleLogin = async () => {
    await dispatch(doLogin({ email, password }));
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser.name}!</h1>
          <p>Email: {currentUser.email}</p>
          {/* Render other user details */}
        </div>
      ) : (
        <div>No user data available.</div>
      )}
    </div>
  )
};

export default LoginPage;
function loginUser(arg0: { email: string; password: string; }): any {
  throw new Error('Function not implemented.');
}
