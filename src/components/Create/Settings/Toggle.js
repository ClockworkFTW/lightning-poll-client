import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonBlank } from "../../Common";

const Toggle = ({ toggle, setToggle }) => (
  <ButtonBlank
    type="button"
    margin="0 0 0 1rem"
    fontSize="1.5rem"
    color="#545e74"
    onClick={() => setToggle(!toggle)}
  >
    <FontAwesomeIcon icon={["fal", "cog"]} />
  </ButtonBlank>
);

export default Toggle;
