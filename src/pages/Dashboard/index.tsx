import React, { Suspense, lazy } from "react";
import { useQueries } from "react-query";
import { fetchData } from "utils/utils";
import Layout from "components/Layout";
import Loader from "components/Loader";
import { API } from "utils/paths";

const CardsContainer = lazy(() => import("components/CardsContainer"));

const Dashboard = () => {
  const [postsQuery, commentsQuery] = useQueries([
    {
      queryKey: "posts",
      queryFn: () => fetchData(API.posts),
    },
    {
      queryKey: "comments",
      queryFn: () => fetchData(API.comments),
    },
  ]);

  const posts = postsQuery.data;
  const comments = commentsQuery.data;

  return (
    <Layout>
      <h1>Dashboard</h1>
      <Suspense fallback={<Loader />}>
        {posts && posts.length > 0 && (
          <CardsContainer posts={posts} comments={comments} />
        )}
      </Suspense>
    </Layout>
  );
};

export default Dashboard;
