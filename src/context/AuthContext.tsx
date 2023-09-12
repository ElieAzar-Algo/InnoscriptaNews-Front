import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of your authentication context
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


// AuthProvider component to manage authentication state
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}


