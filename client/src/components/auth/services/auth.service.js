import axios from 'axios';
import jwt_decode from 'jwt-decode';

/*const register = async (newUser) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser,
  );

  return response.data;
};*/

const register = async (newUser) => {
  const response = await axios.post(`/api/auth/register`, newUser);

  return response.data;
};
const login = async (user) => {
  const response = await axios.post(`/api/auth/login`, user);

  if (response.data) {
    localStorage.setItem('jwt', JSON.stringify(response.data));

    const decodedJwt = jwt_decode(response.data.token);
    localStorage.setItem('user', JSON.stringify(decodedJwt.user));
    return { jwt: response.data, user: decodedJwt.user };
  }
  return { jwt: response.data, user: null };
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};

const verifyJwt = async (jwt) => {
  const response = await axios.post(`/api/auth/verify-jwt`, { jwt });

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return false;
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
