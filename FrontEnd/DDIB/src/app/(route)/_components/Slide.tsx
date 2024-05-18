import React from "react";
import styles from "./todayItem.module.scss";

interface SlideProps {
  thumbnailImage: string;
  name: string;
  price: number;
}

const Slide: React.FC<SlideProps> = ({ thumbnailImage, name, price }) => {
  return (
    <li className={styles.item} style={{ backgroundImage: `url(${thumbnailImage})` }}>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{price}</p>
        <button>Read More</button>
      </div>
    </li>
  );
};

export default Slide;
