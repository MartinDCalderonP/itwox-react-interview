import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IUser } from "pages/SignIn";

interface IFormButton {
  user: IUser;
}

const FormButton = ({ user }: IFormButton) => {
  const [disabledButton, setDisabledButton] = useState(true);

  const disableButton = () => setDisabledButton(!(user.email && user.password));

  useEffect(() => {
    disableButton();
  }, [user]);

  return (
    <button
      className={styles.formButton}
      disabled={disabledButton}
      type="submit"
    >
      Sign In
    </button>
  );
};

export default FormButton;
