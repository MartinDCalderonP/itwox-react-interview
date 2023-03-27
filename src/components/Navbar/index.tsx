import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useUser } from "context/UserContext";
import { actionTypes } from "context/reducer";

const Navbar = () => {
  const { state, dispatch } = useUser();

  const isSignedIn = state?.user;

  const handleSignOutClick = () => {
    dispatch({ type: actionTypes.REMOVE_USER });
  };

  return (
    <div className={styles.navbar}>
      {isSignedIn && (
        <>
          <Link
            className={`${styles.navLink} ${styles.dashboard}`}
            to="/dashboard"
          >
            Dashboard
          </Link>

          <button
            className={`${styles.navLink} ${styles.signOut}`}
            onClick={handleSignOutClick}
          >
            Sign Out
          </button>
        </>
      )}

      {!isSignedIn && (
        <Link className={`${styles.navLink} ${styles.signIn}`} to="/sign-in">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Navbar;
