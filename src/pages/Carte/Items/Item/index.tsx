import styles from "./Item.module.scss";
import items from "data/items.json";
import classNames from "classnames";

type Props = typeof items[0];

export default ({
  title,
  size,
  category,
  description,
  photo,
  price,
  serving,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}</div>
          <div className={styles.item__serving}>
            {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
