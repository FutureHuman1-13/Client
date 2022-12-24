import { useParams, useLocation } from "react-router-dom";


const UseParams = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    return (
        <>
            <h1>Hello my name is {fname} and {lname}</h1>
            <br />
            <p>My Current location is :{location.pathname}</p>
            {location.pathname === `/Contact/fname/lname` ? (<button onClick={()=>alert(`You are Awesome!`)}>Click Me</button>) : null}
        </>
    )
}
export default UseParams;