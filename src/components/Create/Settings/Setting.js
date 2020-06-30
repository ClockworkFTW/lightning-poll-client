import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonBlank } from "../../Common";

const Modal = ({ header, setting, setSetting }) => (
  <Container>
    <Header>{header}</Header>
    <ButtonBlank
      type="button"
      fontSize="1.5rem"
      color={setting ? "#545e74;" : "#d5d6dc"}
      onClick={() => setSetting(!setting)}
    >
      <FontAwesomeIcon icon={["fal", setting ? "check-square" : "square"]} />
    </ButtonBlank>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e2e2;
`;

const Header = styled.h1`
  font-size: 0.875rem;
  color: #21334e;
`;

export default Modal;
