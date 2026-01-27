import fruitReducer from "../fruit/FruitReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducer({
    fruit: fruitReducer,
    fkood: foodReducer 
})