import React from "react";
import styled from "styled-components";

import { Container } from "../Common";
import Welcome from "./Welcome";
import Card from "./Card";

const Home = ({ polls }) => {
  const publicPolls = polls
    .filter((poll) => !poll.settings.privateLink)
    .sort((a, b) => new Date(b.created) - new Date(a.created));

  return (
    <Wrapper>
      <Container>
        <Welcome />
        <List>
          {publicPolls.map((poll) => (
            <Card key={poll.link} poll={poll} />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 1.25rem 0;
  overflow: scroll;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
`;

const List = styled.div``;

export default Home;
