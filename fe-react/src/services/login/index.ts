import { UserLogin } from '../../store/user/user.type';

export const login = async (userLogin: UserLogin): Promise<Response> => {
  const { email, password } = userLogin;
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const raw = JSON.stringify({
    user: {
      email,
      password
    }
  });

  const redirect: RequestRedirect = 'follow';

  const requestOptions = {
    body: raw,
    headers: myHeaders,
    method: 'POST',
    redirect
  };

  const response = await fetch('http://localhost:4000/login', requestOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};
