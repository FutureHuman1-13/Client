import { useEffect, useState } from "react";
const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // alert("I am Cliked!");
    // console.log("Clicked!");
    document.title=`You Cliked me ${num} times`;   
  });

  return (
    <>
      <button onClick={() => {
        setNum(num + 1);
      }}>Click Me {num}</button>
    </>
  )
}
export default App;
