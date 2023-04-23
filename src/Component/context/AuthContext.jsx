import { createContext, useContext, useEffect, useState } from 'react';
import { loginGoogle, logoutGoogle, onUserStateChange } from '../../Api/firebase.js';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginGoogle, logoutGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
