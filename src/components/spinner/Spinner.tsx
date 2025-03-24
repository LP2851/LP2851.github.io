import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SpinnerComponent = () => {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      spinPulse={true}
      fontSize="xxx-large"
      color="var(--app-title-font-shadow)"
    />
  );
};

export const Spinner = memo(SpinnerComponent);
