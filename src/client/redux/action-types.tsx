enum ActionType { Increment, Decrement }

class Action {
    constructor(type: ActionType) {
        this.type = type;
    }
    type: ActionType
}

export { ActionType, Action }