import React from 'react';
import styled from 'styled-components';

const StyledCounterOutput = styled.div`
  width: 100%;
  background-color: #10aded;
  color: white;
  font-size: 1.8rem;
  text-align: center;
  padding: 20px 0;
  box-sizing: border-box;
`;

const counterOutput = props => (
  <StyledCounterOutput>Current Counter: {props.value}</StyledCounterOutput>
);

export default counterOutput;
