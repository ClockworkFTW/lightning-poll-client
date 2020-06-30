import React from "react";
import styled from "styled-components";

const Expiraiton = ({ time, setTime, int, setInt }) => (
  <Container>
    <Group>
      <Title>Ends in:</Title>
      <Time
        type="number"
        value={time}
        disabled={int === 0}
        onChange={(event) => setTime(event.target.value)}
      />
    </Group>
    <Options>
      <Interval type="button" onClick={() => setInt(60)} active={int === 60}>
        Mins
      </Interval>
      <Interval
        type="button"
        onClick={() => setInt(3600)}
        active={int === 3600}
      >
        Hours
      </Interval>
      <Interval
        type="button"
        onClick={() => setInt(86400)}
        active={int === 86400}
      >
        Days
      </Interval>
      <Interval type="button" onClick={() => setInt(0)} active={int === 0}>
        Never
      </Interval>
    </Options>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.header`
  font-size: 0.875rem;
  color: #21334e;
`;

const Time = styled.input`
  width: 30px;
  margin-left: 5px;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Interval = styled.button`
  margin-left: 4px;
  padding: 0.375rem;
  border: none;
  outline: none;
  border-radius: 500px;
  background: ${(props) =>
    props.active ? "linear-gradient(-20deg,#b721ff 0%,#21d4fd 100%)" : "none"};
  font-family: inherit;
  font-size: 0.875rem;
  color: ${(props) => (props.active ? "white" : "#21334e")};
`;

export default Expiraiton;
