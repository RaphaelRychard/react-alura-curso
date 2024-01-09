import { useReducer } from 'react';
import { CounterContexts } from './context';
import P from 'prop-types';
import { reducer } from './reducer';
import { data } from './data';

export const CounterProviders = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return <CounterContexts.Provider value={{ counterState, counterDispatch }}>{children}</CounterContexts.Provider>;
};

CounterProviders.propTypes = {
  children: P.node.isRequired,
};
