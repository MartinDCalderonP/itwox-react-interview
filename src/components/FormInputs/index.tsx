import React, { Dispatch, SetStateAction, FormEvent, Fragment } from "react";
import styles from "./styles.module.css";
import { IUser, IInvalidInputs } from "pages/SignIn";

interface IFormInputs {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  invalidInputs: IInvalidInputs;
}

const FormInputs = ({ user, setUser, invalidInputs }: IFormInputs) => {
  const handleUserChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUser({ ...user, [name]: value });
  };

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      value: user.email,
      onChange: handleUserChange,
      error: "Email has an invalid format",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      value: user.password,
      onChange: handleUserChange,
      error: "Password must have at least 6 characters",
    },
  ];

  return (
    <>
      {fields?.map((field) => (
        <Fragment key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            className={styles.input}
            type={field.type}
            name={field.name}
            id={field.name}
            value={field.value}
            onChange={field.onChange}
          />

          {invalidInputs[field.name as keyof typeof invalidInputs] && (
            <p className={styles.errorMessage}>{field.error}</p>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default FormInputs;
