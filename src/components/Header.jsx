import { BiMenu } from "react-icons/bi";
// import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./Header.module.scss";
import pic from "../assets/images/logo.svg";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img
          className={classes.header__content__logo}
          src={pic}
          alt="Snap logo"
        />

        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
          <div className={classes.header__content__nav__button}>
            <button type="button" className="login">
              Login
            </button>
            <button type="button" className="register">
              Register
            </button>
          </div>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
