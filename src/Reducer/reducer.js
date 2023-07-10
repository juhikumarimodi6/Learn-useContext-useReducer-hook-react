export const initaialState = 0;
export const reducer = (state, action) => {
            switch(action) {
                case 'INCREMENT' : 
                    return state + 1;
                case 'DECREMENT' :
                    return state - 1;
                case 'RESET' :
                    return initaialState;
                default:
                    return state;
            }
        }

