import { Link } from "react-router-dom";

export default function NavMenu() {

  return (
    <>
      <h2>NavMenu</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </>
  )
}