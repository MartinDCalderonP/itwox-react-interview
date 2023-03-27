import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface IPaginationButton {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PaginationButton = ({
  children,
  className,
  disabled,
  isActive,
  onClick,
}: IPaginationButton) => {
  const currentClasses = () => {
    if (disabled) return styles.disabled;
    if (isActive) return styles.isActive;
    return "";
  };

  const classes = `${styles.button} ${currentClasses()} ${className}`;

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default PaginationButton;
