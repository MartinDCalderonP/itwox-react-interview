import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import PaginationButton from "../PaginationButton";

interface IPaginationInput {
  currentPage: number;
  numberOfPages: number;
}

const IPaginationInput = ({ currentPage, numberOfPages }: IPaginationInput) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(currentPage);

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value);

    if (isNaN(page)) {
      setInputValue(currentPage);
      return;
    }

    setInputValue(page);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputValue < 1) {
      setInputValue(1);
      return;
    }

    if (inputValue > numberOfPages) {
      setInputValue(numberOfPages);
      return;
    }

    navigate(`/dashboard/${inputValue}`);
  };

  return (
    <form className={styles.container}>
      Page
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <span>of {numberOfPages}</span>
      <PaginationButton onClick={handleButtonClick}>
        <BiSearch />
      </PaginationButton>
    </form>
  );
};

export default IPaginationInput;
