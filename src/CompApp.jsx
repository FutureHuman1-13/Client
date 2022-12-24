import { createContext } from "react";
import CompA from "./CompA";


const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
    <FirstName.Provider value={"kush"}>
      <LastName.Provider value={"human"}>
      <CompA />
      </LastName.Provider>
      </FirstName.Provider>
    </>
  )
}
export default App;
export {FirstName,LastName};