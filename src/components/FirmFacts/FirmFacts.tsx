import { Button } from "../Button";
import { FirmFactCard } from "../FirmFactCard";
import styles from "./FirmFacts.module.scss";

const ONE_LINE_TEXT = "This is a one line button";
const TWO_LINE_TEXT = "This is a two line button that terminates with...";

const FirmFacts = () => {
  return (
    <div className={styles.firmFacts}>
      <FirmFactCard variant="default">
        <Button variant="icon">{TWO_LINE_TEXT}</Button>
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="icon">{TWO_LINE_TEXT}</Button>
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="default">{ONE_LINE_TEXT}</Button>
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="icon">{TWO_LINE_TEXT}</Button>
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button variant="icon">{TWO_LINE_TEXT}</Button>
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button disabled variant="icon">
          {TWO_LINE_TEXT}
        </Button>
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button variant="icon">{TWO_LINE_TEXT}</Button>
      </FirmFactCard>
    </div>
  );
};

export default FirmFacts;
