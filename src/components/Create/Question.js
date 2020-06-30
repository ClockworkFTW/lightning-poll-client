import React from "react";
import styled from "styled-components";

const Quesiton = ({ title, setTitle }) => {
  const limit = 100;
  const handleLimit = (val) =>
    title.length >= limit ? setTitle(val.substring(0, 100)) : setTitle(val);

  return (
    <Container>
      <Input
        type="text"
        placeholder="What do you want to ask?"
        value={title}
        onChange={(event) => handleLimit(event.target.value)}
      />
      <Limit>
        {title.length}/<span style={{ fontSize: "0.75rem" }}>{limit}</span>
      </Limit>
    </Container>
  );
};

const Container = styled.div`
  margin: 1rem 0;
`;

const Input = styled.textarea`
  width: 100%;
  height: 220px;
  padding: 0;
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #21334f;
  resize: none;
  &::placeholder {
    color: #d5d6dc;
  }
`;

const Limit = styled.h5`
  width: 100%;
  text-align: right;
  font-size: 0.875rem;
  color: #818898;
`;

export default Quesiton;
