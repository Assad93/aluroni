import React from "react";
import styles from "./SearchBar.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default ({ query, setQuery }: Props) => {
  return (
    <div className={styles.searchBar}>
      <input
        placeholder="Buscar"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};
