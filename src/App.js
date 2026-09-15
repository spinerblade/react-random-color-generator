import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import { useState } from 'react';

const StyledColorDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
  text-align: center;
  font-size: 20px;
`;
export default function App() {
  const [randomHexcolor, setRandomHexcolor] = useState(randomColor());
  return (
    <>
      <button
        style={{
          padding: '10px 10px 20px',
          display: 'block',
          width: '200px',
          margin: '16px auto',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '30px',
        }}
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
