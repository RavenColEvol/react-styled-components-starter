import { createContext, useContext, useState } from "react";
import { UserThemeModes, getUserMode } from "./utils";

type ModeContextValueType = [
  UserThemeModes,
  React.Dispatch<React.SetStateAction<UserThemeModes>>
]

const ModeContext = createContext<undefined | ModeContextValueType>(undefined);

function ModeProvider({ children }: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState(() => getUserMode())
  return (
    <ModeContext.Provider value={[mode, setMode]}>
      {children}
    </ModeContext.Provider>
  )
}

const useMode = () => useContext(ModeContext)!;

export {
  ModeProvider,
  useMode
}