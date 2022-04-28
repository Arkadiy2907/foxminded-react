import React from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../action/ActionTypes"
import { arithmeticOperations } from "../action/Action"

function AddComponent() {
    const dispatch = useDispatch()

    const addNumber = () => {
        dispatch(arithmeticOperations(ADD, 1))
    }

    return (
        <button onClick={() => addNumber()}>add</button>
    )
}

export default AddComponent;