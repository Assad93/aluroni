import styles from "./Filters.module.scss";
import filters from "./filters.json";
import classnames from "classnames";

type IOpt = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default ({ filter, setFilter }: Props) => {
  const selectFilter = (opt: IOpt) => {
    if (filter === opt.id) return setFilter(null);
    return setFilter(opt.id);
  };

  return (
    <div className={styles.filters}>
      {filters.map((opt) => (
        <button
          className={classnames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter == opt.id,
          })}
          key={opt.id}
          onClick={() => selectFilter(opt)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
