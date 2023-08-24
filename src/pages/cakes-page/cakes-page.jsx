import styles from "./cakes-page.module.css";
import { Link, useLoaderData } from "react-router-dom";
import data from "../../data/data.json";
import { useEffect, useState } from "react";

export const CakesPage = () => {
  const cakes = useLoaderData();
  // console.log(cakes)

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Торты</h1>
      <p className={styles.description}>
        Цены на торты для кафе, ресторанов, пекарен, баров, на заказ с
        доставкой, от кондитерской Пралине
      </p>
      <div className={styles.cards}>
        {cakes.map(cake => (
          <Link className={styles.card} to={cake.id.toString()} key={cake.id}>
            <img className={styles.image} src={cake.url} alt={cake.title} />
            <p className={styles.image_title}>{cake.title}</p>
            <p className={styles.image_description}>{cake.description}</p>
            <div className={styles.price}>{cake.price} rub</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export const cakesLoader = async () => {
  const res = await fetch("http://localhost:4000/cakes");

  return res.json();
};



// export const CakesPage = () => {
//   const [cakes, setCakes] = useState([]);

//   useEffect(() => {
//     // fetch("../../data/cakes.json")
//     setCakes(data.cakes)
//   },[])

//   return (
//     <section className={styles.section}>
//       <h1 className={styles.title}>Торты</h1>
//       <p className={styles.description}>
//         Цены на торты для кафе, ресторанов, пекарен, баров, на заказ с
//         доставкой, от кондитерской Пралине
//       </p>
//       <ul className={styles.cards}>
//         {cakes && cakes.map((cake) => {
//           return (
//             <li key={cake.id}>
//               <Link className={styles.card} to={`/cakes/${cake.id}`}>
//                 <img className={styles.image} src={cake.url} alt={cake.title} />
//                 <p className={styles.image_title}>{cake.title}</p>
//                 <p className={styles.image_description}>{cake.description}</p>
//                 <div className={styles.price}>{cake.price} rub</div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };


