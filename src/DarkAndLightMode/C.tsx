import { useContext } from "react";
import {
  DarkAndLightContext,
  DarkAndLightContextType,
} from "./DarkAndLightContext";

const C = () => {
  const { mode, setMode } = useContext(
    DarkAndLightContext
  ) as DarkAndLightContextType;

  return (
    <div>
      <h1>In C comp</h1>
      <h1>Mode in C: {mode}</h1>
      <button
        onClick={() => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        }}
      >
        Change Mode
      </button>
    </div>
  );
};

export default C;
