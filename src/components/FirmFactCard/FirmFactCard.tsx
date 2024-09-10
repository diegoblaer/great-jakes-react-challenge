import { PropsWithChildren } from "react";
import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps extends PropsWithChildren {
  variant: "default" | "border";
}

const FirmFactCard = ({ variant, children }: FirmFactCardProps) => {
  return (
    <div className={`${styles.firmFactCard} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default FirmFactCard;
