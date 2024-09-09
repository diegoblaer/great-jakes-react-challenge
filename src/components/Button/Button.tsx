import { ButtonHTMLAttributes } from "react";
import "./Button.scss";
import { SearchIcon } from "../icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "icon";
}

const Button = ({ variant, ...props }: ButtonProps) => {
  const buttonText: Record<ButtonProps["variant"], string> = {
    icon: "This is a two line button that terminates with...",
    default: "This is a one line button",
  };

  return (
    <button className={`button ${variant}`} {...props}>
      {variant === "icon" && <SearchIcon />}
      <span>{buttonText[variant]}</span>
    </button>
  );
};

export default Button;
