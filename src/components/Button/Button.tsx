import { ButtonHTMLAttributes } from "react";
import "./Button.scss";
import { SearchIcon } from "../icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "icon";
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {variant === "icon" && <SearchIcon />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
