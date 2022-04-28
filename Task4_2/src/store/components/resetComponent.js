import React from "react"
import { useDispatch } from "react-redux"
import { async_reset } from "../action/Action"

function ResertComponent() {
    const dispatch = useDispatch()
    
    return (
        <button onClick={() => dispatch(async_reset())}>resert</button>
    )
}

export default ResertComponent;