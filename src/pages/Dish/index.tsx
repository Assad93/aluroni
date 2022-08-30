import { useLocation, useNavigate, useParams } from "react-router-dom";
import items from "data/items.json";
import styles from "./Dish.module.scss";
import classNames from "classnames";
import { Dish } from "types/Dish";

export default () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { dish } = state as { dish: Dish };
  const { id } = useParams();
  const dish = items.find((item) => item.id === Number(id));

  if (!dish) {
    return "";
  }

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <div className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
        </div>
        <div className={styles.tags}>
          <div
            className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type__${dish.category.label.toLowerCase()}`]]:
                true,
            })}
          >
            {dish.category.label}
          </div>
          <div className={styles.tags__portion}>{dish.size}g</div>
          <div className={styles.tags__serving}>
            Serve {dish.serving} pessoa{dish.serving === 1 ? "" : "s"}
          </div>
          <div className={styles.tags__value}>R$ {dish.price.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};
