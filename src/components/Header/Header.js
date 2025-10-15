import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Header className={styles.header}>
      <h1>My counter</h1>
      <nav>
        <ul className={styles.nowList}>
          <li className={styles.nowListItem}>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </nav>

      <div>
        <button>Switch theme</button>
      </div>
    </Header>
  );
};

export default Header;
