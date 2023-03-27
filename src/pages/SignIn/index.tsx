import React, { useState, FormEvent } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "context/UserContext";
import { actionTypes } from "context/reducer";
import { validateEmail, validatePassword } from "utils/utils";
import FormInputs from "components/FormInputs";
import FormButton from "components/FormButton";

export interface IUser {
  email: string;
  password: string;
}

export interface IInvalidInputs {
  email: boolean;
  password: boolean;
}

const SignIn = () => {
  const navigate = useNavigate();
  const { dispatch } = useUser();

  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const [invalidInputs, setInvalidInputs] = useState<IInvalidInputs>({
    email: false,
    password: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = user;

    const validInputs = validateEmail(email) && validatePassword(password);

    if (!validInputs) {
      setInvalidInputs({
        email: !validateEmail(email),
        password: !validatePassword(password),
      });

      return;
    }

    setInvalidInputs({
      email: false,
      password: false,
    });

    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        user: {
          email,
        },
      },
    });

    navigate("/dashboard");
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1>Sign In</h1>

        <FormInputs
          user={user}
          setUser={setUser}
          invalidInputs={invalidInputs}
        />

        <FormButton user={user} />
      </form>
    </main>
  );
};

export default SignIn;
