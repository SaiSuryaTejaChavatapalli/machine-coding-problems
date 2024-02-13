import React, { createContext, useState } from "react";

export type DarkAndLightContextType = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

export const DarkAndLightContext =
  createContext<DarkAndLightContextType | null>(null);

type DarkAndLightContextProviderProps = {
  children: React.ReactNode;
};

export const DarkAndLightContextProvider = ({
  children,
}: DarkAndLightContextProviderProps) => {
  const [mode, setMode] = useState("light");
  return (
    <DarkAndLightContext.Provider value={{ mode, setMode }}>
      {children}
    </DarkAndLightContext.Provider>
  );
};
