import { Dispatch } from 'react';
import { ACTION } from './Calculator';

type Props = {
  dispatch: Dispatch<{ type: any; payload: any; }>;
  operation: any,
};
const OperationBtn = ({ dispatch, operation }: Props) => {
  return (
    <div
      className='btn'
      onClick={() => dispatch({ type: ACTION.OPERATION, payload: { operation } })}
    >
      {operation}
    </div>
  );
};
export default OperationBtn;
