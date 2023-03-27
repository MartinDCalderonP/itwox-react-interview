import React from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import Card from "components/Card";
import Pagination from "components/Pagination";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ICardsContainer {
  posts: IPost[];
  comments: IComment[];
}

const CardsContainer = ({ posts, comments }: ICardsContainer) => {
  const { page } = useParams();

  const postsPerPage = 10;
  const currentPage = page ? Number(page) : 1;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const commentsPerPost = (postId: number) => {
    const commentsOfPost = comments?.filter(
      (comment: IComment) => comment.postId === postId
    );

    return commentsOfPost?.length;
  };

  return (
    <>
      <div className={styles.cardsContainer}>
        {currentPosts.map((post: IPost) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            commentsPerPost={commentsPerPost(post.id)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      />
    </>
  );
};

export default CardsContainer;
