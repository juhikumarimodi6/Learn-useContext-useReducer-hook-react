import { createContext, useContext, useReducer } from "react";
import { reducer, initaialState } from "../Reducer/reducer";

export const CountContext = createContext();

export const StateProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initaialState)

   return ( <CountContext.Provider value = {{countState: state, countDispatch: dispatch}}>
                {children}
            </CountContext.Provider>
   )
}

export const useGlobalState = () => {
    return useContext(CountContext);
}