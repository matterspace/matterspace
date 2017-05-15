enum ActionType { Increment, Decrement }

class Action {
    public type: ActionType;
    constructor(type: ActionType) {
        this.type = type;
    }
}

export { ActionType, Action };
