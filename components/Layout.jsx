import styles from "../styles/Layout.module.css";
import Navbar from "./navbar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
