import styles from "./Item.module.scss";
import items from "data/items.json";
import classNames from "classnames";
import { Dish } from "types/Dish";
import Tags from "components/Tags";
import { useNavigate } from "react-router-dom";

export default (props: Dish) => {
  const navigate = useNavigate();
  const { id, title, description, photo } = props;

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  );
};
