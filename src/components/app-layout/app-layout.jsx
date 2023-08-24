import { Outlet } from "react-router-dom";
import { AppFooter } from "../app-footer/app-footer";
import { AppHeader } from "../app-header/app-header";
import styles from "./app-layout.module.css"

export const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};
