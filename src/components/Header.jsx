import { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./Header.module.scss";
import pic from "../assets/images/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <img
          className={classes.header__content__logo}
          src={pic}
          alt="Snap logo"
        />

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
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
          <div className="btn">
            <button type="button" id="login">
              Login
            </button>
          </div>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiFillCloseCircle onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
