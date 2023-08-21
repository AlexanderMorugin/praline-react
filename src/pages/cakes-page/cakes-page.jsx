import styles from "./cakes-page.module.css";
import napoleon from "../../images/napoleon_tort-xxl-2.jpg";

export const CakesPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Торты</h1>
      <p className={styles.description}>Цены на торты для кафе, ресторанов, пекарен, баров, на заказ с доставкой, от кондитерской Пралине</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img className={styles.image} src={napoleon} alt="napoleon" />
          <p className={styles.image_title}>Торт Наполеон</p>
          <p className={styles.image_description}>Торт приготовленный из хрустящего слоеного теста и мягкого сливочного крема</p>
          <div className={styles.price}>200 руб</div>
        </div>
        <div className={styles.card}>
          <img className={styles.image} src={napoleon} alt="napoleon" />
          <p className={styles.image_title}>Торт Наполеон</p>
          <p className={styles.image_description}>Торт приготовленный из хрустящего слоеного теста и мягкого сливочного крема</p>
          <div className={styles.price}>200 руб</div>
        </div>
        <div className={styles.card}>
          <img className={styles.image} src={napoleon} alt="napoleon" />
          <p className={styles.image_title}>Торт Наполеон</p>
          <p className={styles.image_description}>Торт приготовленный из хрустящего слоеного теста и мягкого сливочного крема</p>
          <div className={styles.price}>200 руб</div>
        </div>
        <div className={styles.card}>
          <img className={styles.image} src={napoleon} alt="napoleon" />
          <p className={styles.image_title}>Торт Наполеон</p>
          <p className={styles.image_description}>Торт приготовленный из хрустящего слоеного теста и мягкого сливочного крема</p>
          <div className={styles.price}>200 руб</div>
        </div>
      </div>
    </main>
  );
};
