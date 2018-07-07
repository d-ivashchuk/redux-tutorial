import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions.js';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const StyledCounterControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 0 1rem 0;
`;
const StyledListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  width: 150px;
  background: #ed3330;
  padding: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: auto;
  &:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.1s ease-in 0s;
  }
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  > li {
    text-align: center;
    color: #10aded;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
  }
`;

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <StyledCounterControlWrapper>
          <CounterControl
            label="Increment"
            clicked={this.props.onIncrementCounter}
          />
          <CounterControl
            label="Decrement"
            clicked={this.props.onDecrementCounter}
          />
          <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
          <CounterControl
            label="Subtract 15"
            clicked={this.props.onSubstractCounter}
          />
        </StyledCounterControlWrapper>
        <StyledListWrapper>
          <StyledButton
            onClick={() => this.props.onStoreResult(this.props.ctr)}>
            Store results
          </StyledButton>
          <StyledList>
            {this.props.results.map(entry => (
              <li
                key={entry.id}
                onClick={() => this.props.onDeleteResult(entry.id)}>
                {entry.value}
              </li>
            ))}
          </StyledList>
        </StyledListWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.rslt.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () =>
      dispatch({ type: actionTypes.ADD, payload: { val: 10 } }),
    onSubstractCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, payload: { val: 15 } }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULT, payload: { result: result } }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETE_RESULT, payload: { resultElId: id } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
