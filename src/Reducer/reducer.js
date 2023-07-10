export const initaialState = {
                count: 0,
                clickCount: 0,
            };
export const reducer = (state, action) => {
            switch(action) {
                case 'INCREMENT' : 
                    return {
                        ...state,
                        count : state.count + 1,
                        clickCount: state.clickCount  + 1,
                    }
                case 'DECREMENT' :
                    return {
                        ...state,
                        count : state.count - 1,
                        clickCount: state.clickCount  + 1,
                    };
                case 'RESET' :
                    return {
                        ...state,
                        count : 0,
                        clickCount: state.clickCount  + 1,
                    };
                default:
                    return {...state};
            }
        }

