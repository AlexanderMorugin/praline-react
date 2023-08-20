import styles from "./cakes-page.module.css";

export const CakesPage = () => {
  return (
    <main className={styles.main}>
      <h1>Cakes Page</h1>
      <div className={styles.card}>
        <div className={styles.price}>200</div>

      </div>
    </main>
  );
};