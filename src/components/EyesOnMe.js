// Code EyesOnMe Component Here
import React from 'react';

function focus(){
    console.log("Good!")
}

function blur(){
    console.log("Hey! Eyes on me!")
}
function EyesOnMe(){
    return(
        <button onClick={focus} onClick={blur}>Eyes on Me</button>
    )
}

export default EyesOnMe