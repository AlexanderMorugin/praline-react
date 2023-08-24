import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import styles from "./app.module.css";
import {
  HomePage,
  PastryPage,
  CakesPage,
  DeliveryPage,
  ContactPage,
  CooperationPage,
  NotFoundPage,
  CakePage,
} from "../../pages";
import { AppLayout } from "../app-layout/app-layout";
import { CakeLayout } from "../cake-layout/cake-layout";
import { cakesLoader } from "../../pages/cakes-page/cakes-page";
import { cakeDetailsLoader } from "../../pages/cake-page/cake-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pastry" element={<PastryPage />} />

        <Route path="cakes" element={<CakeLayout />}>
          <Route index element={<CakesPage />} loader={cakesLoader} />
          <Route path=":id" element={<CakePage />} loader={cakeDetailsLoader} />
        </Route>

        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cooperation" element={<CooperationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);

export const App = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
};
