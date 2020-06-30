import React from "react";
import styled from "styled-components";

import { ButtonAction } from "../Common";

const Submit = ({ locked, vote, voted, handleVote }) =>
  !locked && (
    <Container>
      <ButtonAction
        onClick={handleVote}
        width="100%"
        disabled={vote === null || voted}
      >
        {voted ? "Thank you for your response!" : "Vote"}
      </ButtonAction>
    </Container>
  );

const Container = styled.div`
  text-align: center;
`;

export default Submit;
