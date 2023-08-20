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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p className={styles.name}>ПРАЛИНЕ</p>
          <p className={styles.description}>кондитерская</p>
        </div>
        <ul
          className={
            nav ? [styles.links, styles.links_active].join(" ") : [styles.links]
          }
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={indexUrl}
              onClick={() => setNav(!nav)}
            >
              <span>кондитерская</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={pastryUrl}
              onClick={() => setNav(!nav)}
            >
              <span>пирожные</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={cakesUrl}
              onClick={() => setNav(!nav)}
            >
              <span>торты</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={deliveryUrl}
              onClick={() => setNav(!nav)}
            >
              <span>доставка</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={contactUrl}
              onClick={() => setNav(!nav)}
            >
              <span>контакты</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link_active}` : `${styles.link}`
              }
              to={cooperationUrl}
              onClick={() => setNav(!nav)}
            >
              <span>сотрудничество</span>
            </NavLink>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className={styles.button}>
          {nav ? <AiOutlineClose size="20" color="#EFE3C8"/> : <AiOutlineMenu size="20" color="#EFE3C8" />}
        </div>
      </div>
    </header>
  );
};
