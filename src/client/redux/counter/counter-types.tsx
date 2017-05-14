import { ActionType, Action } from '../action-types';

enum CounterOperationType { Increment, Decrement }

class IncrementDecrementAction extends Action {
    constructor(operation: CounterOperationType) {
        super(ActionType.Increment)
    }
}


export { CounterOperationType, IncrementDecrementAction }