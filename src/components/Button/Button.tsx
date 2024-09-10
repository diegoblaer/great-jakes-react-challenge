import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { SearchIcon } from "../icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "icon";
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {variant === "icon" && <SearchIcon />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
