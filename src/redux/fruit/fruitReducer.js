import { BUY_APPLE, BUY_ORANGE } from "./fruitType"

const fruitState = {
    apple: 5,
    orange: 10
}
const fruitReducer = (state = fruitState, action) =>{
    switch(action.type) {
        case BUY_APPLE :
            return {...state, apple: state.apple -1}
        case BUY_ORANGE :
            return {...state, orange: state.orange -1}
         default :
            return state   
    }
}

export default fruitReducer