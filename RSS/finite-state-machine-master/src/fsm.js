class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        if (config) {
        this.config = config;
        this.currState = config.initial;
        this.listSteps = [];
        this.lastSteps = [];
        this.arrGetStates = [];
        }
        else throw new Error;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.currState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
     changeState(state) {
        if (this.config.states.hasOwnProperty(state)) { 
        this.currState = state;
            this.listSteps.push(this.currState); 
        } else  throw new Error;
}
    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
    if (this.config.states[this.currState].transitions.hasOwnProperty(event)) {
         this.currState = this.config.states[this.currState].transitions[event];  
         this.lastSteps.push(event);
        this.listSteps.push(this.currState);
    } else throw new Error;
    
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
         this.currState = this.config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
         
         if (event === undefined) {
            for ( var j in this.config.states)  this.arrGetStates.push(j) 
        } 
        else {
            for (var j in this.config.states) { 
                if (this.config.states[j].transitions.hasOwnProperty(event)) { this.arrGetStates.push(j) }
            }
        }
        return this.arrGetStates;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
         if (!this.listSteps.length) {
             return false }
        else {
            this.currState = this.listSteps.pop();
            return true;
        }
        
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
         if (!this.lastSteps.length)
    { 
        return false
    } else {
        
        this.listSteps.push(this.currState);
            return true;
    }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.lastSteps.length = 0;
        this.listSteps.length = 0;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
