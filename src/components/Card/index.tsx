import React from "react";
import styles from "./styles.module.css";
import { BiComment } from "react-icons/bi";

interface ICard {
  title: string;
  body: string;
  commentsPerPost: number;
}

const Card = ({ title, body, commentsPerPost }: ICard) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className={styles.commentsCount}>
        <span>{commentsPerPost}</span>
        <BiComment />
      </div>
    </div>
  );
};

export default Card;
