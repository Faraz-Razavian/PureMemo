import React from "react";
const test4 =(props)=>{
    console.log("memo");
    return(
        <h1>Memo {props.name}</h1>
    )
}
export default React.memo(test4)