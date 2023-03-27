import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import Navbar from "components/Navbar";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
