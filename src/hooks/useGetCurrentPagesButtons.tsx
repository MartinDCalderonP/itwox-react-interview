import { useState, useEffect } from "react";

const useGetCurrentPagesButtons = (
  currentPage: number,
  numberOfPages: number
) => {
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  const firstPages = pages.slice(0, 3);
  const middlePages = pages.slice(currentPage - 3, currentPage + 2);
  const lastPages = pages.slice(-3);

  const [currentPagesButtons, setCurrentPagesButtons] = useState(firstPages);

  const getCurrentPagesButtons = () => {
    if (currentPage <= 3) {
      return firstPages;
    }

    if (currentPage >= numberOfPages - 2) {
      return lastPages;
    }

    return middlePages;
  };

  useEffect(() => {
    const currentPagesButtons = getCurrentPagesButtons();
    if (currentPagesButtons) setCurrentPagesButtons(currentPagesButtons);
  }, [currentPage]);

  return currentPagesButtons;
};

export default useGetCurrentPagesButtons;
