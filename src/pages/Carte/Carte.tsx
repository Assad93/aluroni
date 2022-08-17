import styles from "./Carte.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import Sorter, { SorterOptions } from "./Sorter/Sorter";
import Items from "./Items";

export default () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState<SorterOptions>("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.carte}>
        <h3 className={styles.carte__title}>Cardápio</h3>
        <SearchBar query={query} setQuery={setQuery} />
        <div className={styles.carte__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
        <Items query={query} filter={filter} sorter={sorter} />
      </section>
    </main>
  );
};
