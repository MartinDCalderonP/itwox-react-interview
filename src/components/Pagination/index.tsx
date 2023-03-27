import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useGetCurrentPagesButtons from "hooks/useGetCurrentPagesButtons";
import PaginationInput from "./PaginationInput";
import PaginationButton from "./PaginationButton";

interface IPagination {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
}

const Pagination = ({ currentPage, postsPerPage, totalPosts }: IPagination) => {
  const navigate = useNavigate();
  const numberOfPages = Math.ceil(totalPosts / postsPerPage);

  const currentPagesButtons = useGetCurrentPagesButtons(
    currentPage,
    numberOfPages
  );

  const goToNextPage = () => {
    navigate(`/dashboard/${currentPage + 1}`);
  };

  const goToPreviousPage = () => {
    navigate(`/dashboard/${currentPage - 1}`);
  };

  const leftButtonDisabled = currentPage === 1;
  const rightButtonDisabled = currentPage === numberOfPages;

  return (
    <div className={styles.pagination}>
      <PaginationInput
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />

      <div className={styles.buttonsContainer}>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={leftButtonDisabled}
        >
          <BiChevronLeft />
        </PaginationButton>

        <div className={styles.pagesButtons}>
          {currentPagesButtons.map((page) => (
            <PaginationButton
              key={page}
              isActive={page === currentPage}
              onClick={() => navigate(`/dashboard/${page}`)}
            >
              {page}
            </PaginationButton>
          ))}
        </div>

        <PaginationButton onClick={goToNextPage} disabled={rightButtonDisabled}>
          <BiChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
