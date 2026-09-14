import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const StyledColorDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
`;
export default function App() {
  const [randomHexcolor, setRandomHexcolor] = useState(randomColor());
  return (
    <>
      <button
        onClick={() => {
          setRandomHexcolor(randomColor());
        }}
      >
        Generate
      </button>
      <StyledColorDiv backgroundColor={randomHexcolor}>
        Generated Color: {randomHexcolor}
      </StyledColorDiv>
    </>
  );
}
