import { Button } from "../Button";
import { FirmFactCard } from "../FirmFactCard";
import "./FirmFacts.scss";

const FirmFacts = () => {
  return (
    <div className="firm-facts">
      <FirmFactCard variant="default">
        <Button variant="icon" />
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="icon" />
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="default" />
      </FirmFactCard>
      <FirmFactCard variant="default">
        <Button variant="icon" />
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button variant="icon" />
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button disabled variant="icon" />
      </FirmFactCard>
      <FirmFactCard variant="border">
        <Button variant="icon" />
      </FirmFactCard>
    </div>
  );
};

export default FirmFacts;
