import React from "react";
import { useDispatch } from "react-redux";
import { SUBTRACT } from "../action/ActionTypes"
import { arithmeticOperations } from "../action/Action"

function SubtractComponent() {
    const dispatch = useDispatch()
    
    const subtractNamber = () => {
        dispatch(arithmeticOperations(SUBTRACT, 1))    }

    return (
        <button onClick={() => subtractNamber()}>subtract</button>
    )
}

export default SubtractComponent;