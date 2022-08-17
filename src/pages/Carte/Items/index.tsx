import { useEffect, useState } from "react";
import Item from "./Item";
import items from "./items.json";
import styles from "./Items.module.scss";

interface Props {
  query: string;
  filter: number | null;
  sorter: string;
}

export default ({ query, filter, sorter }: Props) => {
  const [list, setList] = useState(items);

  const ascSorter = (list: typeof items, prop: "size" | "serving" | "price") =>
    list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));

  const cmpString = (title: string) => {
    const regex = new RegExp(query, "i");
    return regex.test(title);
  };

  const cmpFilter = (id: number) => {
    if (filter !== null) return filter === id;
    return true;
  };

  const fnSorter = (list: typeof items) => {
    switch (sorter) {
      case "porcao":
        return ascSorter(list, "size");
      case "qtd_pessoas":
        return ascSorter(list, "serving");
      case "preco":
        return ascSorter(list, "price");
      default:
        return list;
    }
  };

  useEffect(() => {
    const newList = items.filter(
      (item) => cmpString(item.title) && cmpFilter(item.category.id)
    );
    setList(fnSorter(newList));
  }, [query, filter, sorter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
