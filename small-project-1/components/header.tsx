import { Fragment } from "react/jsx-runtime";
import styles from "./Header.module.css";
function Header() {
  return (
    <Fragment>
      <div className={styles.header}>
        <h1 className={styles.headerName}>World Countries Data</h1>
        <p className={styles.currently}>Currently, we have 250 countries</p>

        <div className={styles.containerButtons}></div>
      </div>
    </Fragment>
  );
}

export default Header;
