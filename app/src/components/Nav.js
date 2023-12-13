import "./Nav.css";
import { GiAbstract005 } from "react-icons/gi";

const Nav = ({isSignedIn, onSignOut}) => {
    return (
        <nav>
            <div className="logo">
                <GiAbstract005 className="logo-img"/>
                <h1>Rewind</h1>
            </div>
            <ul>
                <li><a href="/Services">Services</a></li>
                <li>{isSignedIn ? (
        <button onClick={onSignOut}>Log Out</button>
      ) : (
        <button>Sign In</button>
      )}</li>
                <li><a href="projects">Projects</a></li>
                <li><a href="projects">Profile</a></li>
            </ul>
        </nav>
    );
};
export default Nav;