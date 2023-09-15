import React, { createContext, useState, ReactNode, useContext } from 'react';


interface Preference {
  id: number
  source: string
  category: string
  author: string
}

interface User {
  id: number
  fullName: string
  email: string
  created_at: string
  updated_at: string
  preferences: Preference[]
}
// the shape of the authentication context
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
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
  const [user, setUser] = useState<User | null>(null as User | null);
  // console.log("TOKEN IN CNTEXT", token)

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}


