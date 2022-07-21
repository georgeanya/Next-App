import navStyles from "../styles/nav.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
