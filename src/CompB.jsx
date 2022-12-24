// import CompC from "./CompC";
import { useContext } from "react";
import { FirstName,LastName } from "./App";


const CompB = () => {
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    return (
        <>
        {/* <CompC/> */}
        <h1>My Name is {fname} and i am {lname}</h1>
        </>
        
    )
}
export default CompB;