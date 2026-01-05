import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Filhal hum dummy user state de rahe hain taaki site crash na ho
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData); // Example: { username: 'Harsh', role: 'admin' }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);