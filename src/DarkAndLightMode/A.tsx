import { useContext } from "react";
import B from "./B";
import {
  DarkAndLightContext,
  DarkAndLightContextType,
} from "./DarkAndLightContext";

const A = () => {
  const { mode, setMode } = useContext(
    DarkAndLightContext
  ) as DarkAndLightContextType;
  return (
    <div>
      <h1>In A comp</h1>
      <h2>Mode in A: {mode}</h2>
      <button
        onClick={() =>
          setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"))
        }
      >
        Change Mode from Comp A
      </button>
      <B />
    </div>
  );
};

export default A;
