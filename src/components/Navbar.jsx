import { useUserContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import { BsBank2 } from "react-icons/bs";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const { logOut, userLogIn } = useUserContext();

    return(
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <Container>
      <NavLink className="navbar-brand" to="/">
        <BsBank2 className="mb-1 me-1"/>Bad Bank</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          {userLogIn?
          <>
          <li className="nav-item"><NavLink id="home" className="nav-link text-center position-relative" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink id="deposit" className="nav-link text-center position-relative" to="/deposit">Deposit</NavLink></li>
          <li className="nav-item"><NavLink id="withdraw" className="nav-link text-center position-relative" to="/withdraw">Withdraw</NavLink></li>
          <li className="nav-item"><NavLink id="alldata" className="nav-link text-center position-relative" to="/alldata">AllData</NavLink></li>
          <li className="nav-item"><button id="logout" className="nav-link text-center position-relative bg-transparent mx-auto" onClick={logOut}>Log Out</button></li>
          </>
          :
          <>
          <li className="nav-item"><NavLink id="login" className="nav-link text-center position-relative" to="/login">Login</NavLink></li>
          <li className="nav-item"><NavLink id="createaccount" className="nav-link text-center position-relative" to="/createaccount">Create Account</NavLink></li>
          </>}
        </ul>
      </div>
    </Container>
  </nav>
      </header>
    );
  }
  export default Navbar;