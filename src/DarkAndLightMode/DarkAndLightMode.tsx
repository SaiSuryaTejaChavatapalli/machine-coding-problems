import A from "./A";
import { DarkAndLightContextProvider } from "./DarkAndLightContext";

const DarkAndLightMode = () => {
  return (
    <DarkAndLightContextProvider>
      <div>
        <A />
      </div>
    </DarkAndLightContextProvider>
  );
};

export default DarkAndLightMode;
