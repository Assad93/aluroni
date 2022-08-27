import styles from "./Carte.module.scss";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import Sorter, { SorterOptions } from "./Sorter/Sorter";
import Items from "./Items";
import theme from "styles/Theme.module.scss";

export default () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<SorterOptions>("");
  return (
    <section className={styles.carte}>
      <h3 className={theme.title}>Cardápio</h3>
      <SearchBar query={query} setQuery={setQuery} />
      <div className={styles.carte__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sorter sorter={sorter} setSorter={setSorter} />
      </div>
      <Items query={query} filter={filter} sorter={sorter} />
    </section>
  );
};
