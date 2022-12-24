import { useState } from "react";


const Component = () => {
    const [Counter, setCounter] = useState(1);
    const inc = () => {
        setCounter(Counter + 1);
    }
    const dec = () => {
        if (Counter > 0) {
            setCounter(Counter - 1);
        }
    }
    const reset = () => {
        setCounter(0);
    }
    return (
        <>
            <h1>{Counter}</h1>
            <button onClick={inc}>Click+</button>
            <button onClick={dec}>Click-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
export default Component;