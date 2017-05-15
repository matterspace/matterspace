import { CounterOperationType, IncrementDecrementAction } from './counter-types';

function increment(): IncrementDecrementAction {
    return new IncrementDecrementAction(CounterOperationType.Increment);
}

function decrement(): IncrementDecrementAction {
    return new IncrementDecrementAction(CounterOperationType.Decrement);
}
