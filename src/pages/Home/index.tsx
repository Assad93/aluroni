import items from "data/items.json";
import styles from "./Home.module.scss";
import theme from "styles/Theme.module.scss";
import aluroni from "assets/img/nossa_casa.png";

export default () => {
  let recomendedItems = [...items].sort(() => 0.5 - Math.random()).splice(0, 3);

  return (
    <section>
      <h3 className={theme.title}>Recomendações da cozinha</h3>
      <div className={styles.recomendeds}>
        {recomendedItems.map((item) => (
          <div>
            <div key={item.id} className={styles.recomended}>
              <div className={styles.recomended__img}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomended__button}>Ver mais</button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={theme.title}>Nossa casa</h3>
      <div className={styles.aluroni}>
        <img src={aluroni} alt="Casa do aluroni" />
        <div className={styles.aluroni__address}>
          Rua Da Massa, 3185 <br /> <br /> Campos dos Goytacazes - RJ
        </div>
      </div>
    </section>
  );
};
