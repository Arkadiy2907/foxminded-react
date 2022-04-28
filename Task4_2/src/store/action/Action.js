  import { RESET } from "./ActionTypes"


export const arithmeticOperations = (operations, numberCount) => {
    return {
        type: operations,
        payload: numberCount
    }
}

export const async_reset = () => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: RESET
            })
        }, 2000)
    }
}