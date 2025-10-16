import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import CONSTANTS from "../../constants";
import styles from "./Header.module.scss";
import { setTheme } from "../../store/slices/themeSlice";

const { THEMES } = CONSTANTS;

const Header = ({ theme, language, setTheme }) => {
  const className = cx(styles.header, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  return (
    <header className={className}>
      <h1>My counter</h1>
      <nav>
        <ul className={styles.nowList}>
          <li className={styles.nowListItem}>link 1</li>
          <li className={styles.nowListItem}>link 2</li>
          <li className={styles.nowListItem}>link 3</li>
        </ul>
      </nav>

      <div>
        <button onClick={() => setTheme()}>Switch theme</button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    language: state.lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: () => dispatch(setTheme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
