import { Route, Routes } from "react-router-dom";

import { AppFooter } from "../app-footer/app-footer";
import { AppHeader } from "../app-header/app-header";
import styles from "./app.module.css";
import { cakesUrl, contactUrl, cooperationUrl, deliveryUrl, indexUrl, notFoundUrl, pastryUrl } from "../../utils/constants";
import { MainPage, PastryPage, CakesPage, DeliveryPage, ContactPage, CooperationPage, NotFoundPage } from "../../pages";


export const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path={indexUrl} element={<MainPage />} />
        <Route path={pastryUrl} element={<PastryPage />} />
        <Route path={cakesUrl} element={<CakesPage />} />
        <Route path={deliveryUrl} element={<DeliveryPage />} />
        <Route path={contactUrl} element={<ContactPage />} />
        <Route path={cooperationUrl} element={<CooperationPage />} />
        <Route path={notFoundUrl} element={<NotFoundPage />} />

      </Routes>

      <AppFooter />
    </div>
  );
};
