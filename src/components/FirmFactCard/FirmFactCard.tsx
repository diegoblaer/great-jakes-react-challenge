import { PropsWithChildren } from "react";
import "./FirmFactCard.scss";

interface FirmFactCardProps extends PropsWithChildren {
  variant: "default" | "border";
}

const FirmFactCard = ({ variant, children }: FirmFactCardProps) => {
  return <div className={`firm-fact-card ${variant}`}>{children}</div>;
};

export default FirmFactCard;
