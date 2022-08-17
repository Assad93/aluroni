import classNames from "classnames";
import React, { useState } from "react";
import options from "./options.json";
import styles from "./Sorter.module.scss";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export type SorterOptions = "" | "porcao" | "qtd_pessoas" | "preco";

interface Props {
  sorter: SorterOptions;
  setSorter: React.Dispatch<React.SetStateAction<SorterOptions>>;
}

export default ({ sorter, setSorter }: Props) => {
  const [open, setOpen] = useState(false);
  const sorterName =
    sorter && options.find((opt) => opt.value === sorter)?.name;
  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter__active"]]: sorter !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sorterName || "Ordenar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles["sorter__options--active"]]: open,
        })}
      >
        {options.map((opt) => (
          <div
            key={opt.value}
            className={styles.sorter__option}
            onClick={() => setSorter(opt.value as SorterOptions)}
          >
            {opt.name}
          </div>
        ))}
      </div>
    </button>
  );
};
