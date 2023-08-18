import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { doLogin } from '../../store/auth/auth.slice';
import { RootState } from '../../store/store';
import './login.styles.scss';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('password');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state: RootState) => state.auth.currentUser);

  const handleLogin = async (): Promise<void> => {
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
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
      {currentUser ? (
        <div>
          <h1>
            Welcome,
            {currentUser.name}
            !
          </h1>
          <p>
            Email:
            {currentUser.email}
          </p>
        </div>
      ) : (
        <div>No user data available.</div>
      )}
    </div>
  );
};

export default LoginPage;
