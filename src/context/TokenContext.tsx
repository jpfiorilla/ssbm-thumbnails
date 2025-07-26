import React, { createContext, useContext, useState, useEffect } from "react";

interface TokenContextType {
  token: string | null;
  setToken: (token: string) => Promise<boolean>;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setTokenState] = useState<string | null>(null);

  // Load token from secure storage on mount
  useEffect(() => {
    (async () => {
      const savedToken = await window.startgg.getToken();
      if (savedToken) setTokenState(savedToken);
    })();
  }, []);

  const setToken = async (newToken: string): Promise<boolean> => {
    const success = await window.startgg.validateAndSave(newToken);
    if (success) {
      setTokenState(newToken); // UI state
    }
    return success;
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
