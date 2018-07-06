import React from 'react';
import styled from 'styled-components';

const StyledCounterControl = styled.div`
  background-color: white;
  padding: 15px;
  margin: 1em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  border-radius: 1rem;
`;

const counterControl = props => (
  <StyledCounterControl onClick={props.clicked}>
    {props.label}
  </StyledCounterControl>
);

export default counterControl;
