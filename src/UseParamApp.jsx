import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import UseParams from "./UseParam";
//only you have to import this on App.js.


const App = () => {
  const Name = () => {
    return (<h1>Hello I am kush</h1>);
  };
  const Menu = () => {
    return (
      <>
        <NavLink exact activeClassName="active-class" to="/">
          About Us
        </NavLink>
        <NavLink exact activeClassName="active-class" to="/Contact">
          Contact Us
        </NavLink>
        <br />
        <a href="/">Hello About!</a>
        <a href="/Contact">Hello Contact!</a>
      </>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact/Name" element={<Name />} />
          <Route path="/Contact/:fname/:lname" element={<UseParams />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <About/>
      <Contact/> */}
    </>
  )
}
export default App;
