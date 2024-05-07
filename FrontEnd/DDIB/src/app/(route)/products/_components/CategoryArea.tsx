"use client";

import Category from "./Category";
import { useState } from "react";
import styles from "./categoryArea.module.scss";

export default function CategoryArea() {
  const [category, setCategory] = useState("");

  const CategoryItem = [
    { title: "All", value: "" },
    { title: "Fashion", value: "Fashion" },
    { title: "Beauty", value: "Beauty" },
    { title: "Food", value: "Food" },
    { title: "Appliance", value: "Appliance" },
    { title: "Sports", value: "Sports" },
    { title: "Living", value: "Living" },
    { title: "Pet", value: "Pet" },
    { title: "Travel", value: "Travel" },
  ];

  return (
    <>
      <div className={styles.category}>
        {CategoryItem.map((item) => (
          <>
            <div onClick={() => setCategory(item.value)}>{item.title}</div>
          </>
        ))}
      </div>
      <Category category={category}></Category>
    </>
  );
}
