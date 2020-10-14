import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21143067Reducer from '../features/SignIn21143067/redux/reducers'
import SignIn2142400Reducer from '../features/SignIn2142400/redux/reducers'
import SignIn2142382Reducer from '../features/SignIn2142382/redux/reducers'
import SignIn2142368Reducer from '../features/SignIn2142368/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21143067: SignIn21143067Reducer,
SignIn2142400: SignIn2142400Reducer,
SignIn2142382: SignIn2142382Reducer,
SignIn2142368: SignIn2142368Reducer,

});