import { CounterOperationType, IncrementDecrementAction, } from './counter-types';
import { Action, ActionType } from '../action-types';

interface ICounterStoreState {
    count: number;
};

const defaultCounterStoreState:ICounterStoreState = {
    count: 0
};

export function counterReducer(state: ICounterStoreState = defaultCounterStoreState, action: Action): ICounterStoreState {
    switch(action.type) {
        case ActionType.Increment:
            return  { ...state, count: state.count + 1 };
        case ActionType.Decrement:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}