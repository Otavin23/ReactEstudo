import React from "react"

export default (props)=> {
    return (
        <div>

            <h4>{props.children} - {props.sobrenome}</h4>
        </div> 
    )
}