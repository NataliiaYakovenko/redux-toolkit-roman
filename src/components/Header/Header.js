import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import CONSTANTS from "../../constants";
import styles from "./Header.module.scss";
import { setTheme } from "../../store/slices/themeSlice";

const { THEMES } = CONSTANTS;

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const getCSSName = cx(styles.header, {
    [styles.blackTheme]: theme === THEMES.BLACK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <header className={getCSSName}>
      <h1>My counter</h1>
      <nav>
        <ul className={styles.nowList}>
          <li className={styles.nowListItem}>link 1</li>
          <li className={styles.nowListItem}>link 2</li>
          <li className={styles.nowListItem}>link 3</li>
          <li className={styles.nowListItem}>link 4</li>
        </ul>
      </nav>

      <div>
        <button onClick={() => dispatch(setTheme())}>Switch theme</button>
      </div>
    </header>
  );
};


export default Header;
