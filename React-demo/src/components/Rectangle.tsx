import React from "react";
//function Rectangle({width,height}){
interface rectProp {
    width: Number,
    height: Number,
    color: string
};
function Rectangle(props: rectProp){
    let styles = {
        display: "inline-block",
        width: props.width + "px",
        height: props.height + "px",
        background: props.color
    };

    return (<div style={styles}>
    </div>);
}

export default Rectangle;
