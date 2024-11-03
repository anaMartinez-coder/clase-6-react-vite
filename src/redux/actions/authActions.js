// src/redux/actions/authActions.js
export const login = (credentials) => ({
    type: 'LOGIN',
    payload: credentials,
  });
  
  export const register = (userData) => ({
    type: 'REGISTER',
    payload: userData,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  