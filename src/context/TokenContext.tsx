import React, { createContext, useContext, useState, useEffect } from "react";

interface TokenContextType {
  token: string | null;
  setToken: (token: string) => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("startggToken");
    if (savedToken) setTokenState(savedToken);
  }, []);

  const setToken = (newToken: string) => {
    localStorage.setItem("startggToken", newToken);
    setTokenState(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
