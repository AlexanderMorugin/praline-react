import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./app-header.module.css";
import {
  cakesUrl,
  contactUrl,
  cooperationUrl,
  deliveryUrl,
  indexUrl,
  pastryUrl,
} from "../../utils/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const AppHeader = () => {
  const [nav, setNav] = React.useState(false);
  const setActive = ({ isActive }) =>
    isActive ? `${styles.link_active}` : `${styles.link}`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p className={styles.name}>ПРАЛИНЕ</p>
          <p className={styles.description}>кондитерская</p>
        </div>
        <nav>
          <ul
            className={
              nav
                ? [styles.links, styles.links_active].join(" ")
                : [styles.links]
            }
          >
            <li>
              <NavLink
                className={setActive}
                to={indexUrl}
                onClick={() => setNav(!nav)}
              >
                <span>главная</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={setActive}
                to={pastryUrl}
                onClick={() => setNav(!nav)}
              >
                <span>пирожные</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={setActive}
                to={cakesUrl}
                onClick={() => setNav(!nav)}
              >
                <span>торты</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={setActive}
                to={deliveryUrl}
                onClick={() => setNav(!nav)}
              >
                <span>доставка</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={setActive}
                to={contactUrl}
                onClick={() => setNav(!nav)}
              >
                <span>контакты</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={setActive}
                to={cooperationUrl}
                onClick={() => setNav(!nav)}
              >
                <span>сотрудничество</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div onClick={() => setNav(!nav)} className={styles.button}>
          {nav ? <AiOutlineClose size="20" /> : <AiOutlineMenu size="20" />}
        </div>
      </div>
    </header>
  );
};
