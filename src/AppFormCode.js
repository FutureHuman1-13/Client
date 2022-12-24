import { useState } from 'react';
import './index.css';


const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((preValue) => {
      return{
        ...preValue,
        [name]:value,
      };
    })
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <div>
            {/* <h1 className="heading_style">List Of Top 5 Netflix Series in 2020</h1> */}
            {/* {(favSeries==="amazon")?<NetflixCo/>: <AmazonCo/>} */}
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              type="text"
              name='fname'
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={fullName.fname}
            />

            <input
              type="text"
              name='lame'
              placeholder="Enter Your Last Name"
              onChange={inputEvent}
              value={fullName.lname}
            />

            <input
              type="email"
              name='email'
              placeholder="Enter Your Email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off"
            />

            <input
              type="number"
              name='phone'
              placeholder="Enter Your Number"
              onChange={inputEvent}
              value={fullName.phone}
            />

            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>
    </>
  )
};
export default App;

