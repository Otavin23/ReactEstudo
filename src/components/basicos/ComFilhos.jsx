import React from "react"

export default (props)=>{
    return (
        <div>
            <h2>Os filhos:</h2>
            <div>
                {props.children}
                </div>
        </div>
    )
}