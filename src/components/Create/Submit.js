import React from "react";

import { ButtonAction } from "../Common";

const Submit = ({ disabled, status }) => (
  <ButtonAction type="submit" width="100%" disabled={disabled}>
    {status()}
  </ButtonAction>
);

export default Submit;
