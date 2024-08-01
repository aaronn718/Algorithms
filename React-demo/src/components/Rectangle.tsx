import React, { useEffect, useState } from "react";

//function Rectangle({width,height}){
interface rectProp {
    width: Number,
    height: Number,
    color: string,
    changeColor(col: string): void,
};


function Rectangle(props: rectProp){
    let styles = {
        display: "inline-block",
        width: props.width + "px",
        height: props.height + "px",
        background: props.color
    };
    
    useEffect(() => {
        console.log("color was changed to " + props.color);
    }, [props.color]); //when color change, do this -> for every event use []

    return (<><div style={styles}>
    </div>
    <button onClick={() => props.changeColor("Green")}>From Child</button>
    </>);
}

export default Rectangle;
