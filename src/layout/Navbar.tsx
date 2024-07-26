import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Navbar;
