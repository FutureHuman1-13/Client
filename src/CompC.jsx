import { FirstName, LastName } from "./App";


const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {
                                (lname) => {
                                    return <h1>Hello i am {fname} {lname}</h1>;
                                }
                            }
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}
export default CompC;