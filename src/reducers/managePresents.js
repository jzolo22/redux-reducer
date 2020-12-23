let state = {
    numberOfPresents: 0
}

export function managePresents(state = state, action){
    switch(action.type) {
        case "INCREASE":
            // return {numberOfPresents: state.numberOfPresents + 1}
            return {...state, numberOfPresents: state.numberOfPresents + 1}
        // case "DECREASE":
            // do something;
        default: 
            return state
    }
        

}
