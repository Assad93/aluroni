import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import items from "data/items.json";
import styles from "./Dish.module.scss";
import classNames from "classnames";
import { Dish } from "types/Dish";
import Tags from "components/Tags";
import NotFound from "pages/NotFound";
import Header from "components/Header";

export default () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { dish } = state as { dish: Dish };
  const { id } = useParams();
  const dish = items.find((item) => item.id === Number(id));

  if (!dish) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route
          index
          element={
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
                  <p className={styles.content__description}>
                    {dish.description}
                  </p>
                </div>
                <Tags {...dish} />
              </div>
            </>
          }
        />
      </Route>
    </Routes>
  );
};
