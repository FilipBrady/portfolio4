import { useReducer } from 'react';
import './Calculator.css';
import CalcButton from './CalcButton';
import OperationBtn from './OperationBtn';


export const ACTION = {
  ADD_DIGIT: 'addDigit',
  OPERATION: 'operation',
  DELETE_DIGIT: 'deleteDigit',
  CLEAR: 'clear',
  EVALUATE: 'evaluate',
};

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTION.ADD_DIGIT:
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      if (payload.digit === '.') {
        return {
          ...state,
          currentOperand: `${state.currentOperand || ''} ${payload.digit}`,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTION.CLEAR:
      return {
        ...state,
        currentOperand: null,
        previousOperand: null,
        operation: null,
      };
    case ACTION.DELETE_DIGIT:
      if (state.currentOperand === null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTION.OPERATION:
      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }
      if (state.currentOperand === null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.currentOperand === '0' && payload.operation === '÷') {
        return {
          ...state,
          currentOperand: 'ERROR',
        };
      }
      if (state.previousOperand === null || state.previousOperand === undefined) {
        return {
          ...state,
          operation: payload.operation,
          currentOperand: null,
          previousOperand: state.currentOperand,
        };
      }
      return {
        ...state,
        currentOperand: null,
        operation: payload.operation,
        previousOperand: evaluate(state),
      };
      case ACTION.EVALUATE: 
      if(state.currentOperand === null || state.previousOperand === null || state.operation === null ) {
        return state
      }
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
  }
}

function evaluate({ currentOperand, previousOperand, operation }: any) {
  const currentNumber = parseFloat(currentOperand);
  const previousNumber = parseFloat(previousOperand);

  if (isNaN(currentNumber) || isNaN(previousNumber)) {
    return '';
  }

  let result = 0;
  switch (operation) {
    case '+':
      result = previousNumber + currentNumber;
      break;
    case '-':
      result = previousNumber - currentNumber;
      break;
    case '*':
      result = previousNumber * currentNumber;
      break;
    case '÷':
      result = previousNumber / currentNumber;
      break
  }
  return result;
}

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className='CalculatorApp'>
      <div className='CalculatorBody'>
        <div className='equals'>
          <div className='previousOperand'>
            {previousOperand} {operation}
          </div>
          <div className='currentOperand'>{currentOperand}</div>
        </div>
        <div className='btnBox'>
          <div
            className='btnC'
            onClick={() => dispatch({ type: ACTION.CLEAR })}
          >
            C
          </div>
          <OperationBtn dispatch={dispatch} operation='÷' />
          <div
            className='btn'
            onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}
          >
            DEL
          </div>
          <CalcButton dispatch={dispatch} digit='1' />
          <CalcButton dispatch={dispatch} digit='2' />
          <CalcButton dispatch={dispatch} digit='3' />
          <OperationBtn dispatch={dispatch} operation='*' />
          <CalcButton dispatch={dispatch} digit='4' />
          <CalcButton dispatch={dispatch} digit='5' />
          <CalcButton dispatch={dispatch} digit='6' />
          <OperationBtn dispatch={dispatch} operation='+' />
          <CalcButton dispatch={dispatch} digit='7' />
          <CalcButton dispatch={dispatch} digit='8' />
          <CalcButton dispatch={dispatch} digit='9' />
          <OperationBtn dispatch={dispatch} operation='-' />
          <CalcButton dispatch={dispatch} digit='.' />
          <CalcButton dispatch={dispatch} digit='0' />
          <div
            className='btnC'
            onClick={() => dispatch({ type: ACTION.EVALUATE })}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
