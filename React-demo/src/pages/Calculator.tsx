import Rectangle from "../components/Rectangle";
import { useState } from "react";
export const Calculator = () =>
{
    const [varCalEngine, changeCalEngine] = useState<CalEngine>({lastClicked: "", total: 0, breadCrumbs: "", lastNum: 0});
    return(<>
    <div><h1>My Calculator Page</h1></div>
    <div>
        <CalButtonNum num={1} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={2} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={3} engine={varCalEngine} changeEngine={changeCalEngine} />
        <br />
        <CalButtonNum num={4} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={5} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={6} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={10} sym="+" engine={varCalEngine} changeEngine={changeCalEngine} />
        <br />
        <CalButtonNum num={7} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={8} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={9} engine={varCalEngine} changeEngine={changeCalEngine} />
        <CalButtonNum num={10} sym="=" engine={varCalEngine} changeEngine={changeCalEngine} />
        <p />
        <label>{varCalEngine.breadCrumbs}</label>
        <p />
        <label>Answer is : {varCalEngine.total}</label>
    </div>
    </>);
}

interface CalButtonNumProp{
    num: number,
    sym?: string,
    engine: CalEngine,
    changeEngine(engine: CalEngine): void
}

interface CalEngine{
    lastClicked: string,
    lastNum: number,
    total: number,
    breadCrumbs: string
}

function handleClick(props:CalButtonNumProp)
{
    let displayText = "";
    let breadCrumbs = "" + props.engine.breadCrumbs;
    let calTotal = props.engine.total;
    if(props.num < 10)
    {
        displayText = props.num.toString();
        //props.changeEngine({...props.engine, total : props.num})
        if(props.engine.lastClicked === "=")
        {
            breadCrumbs = "";
            calTotal = 0;
        }
        props.changeEngine({lastClicked: props.num.toString(), 
            lastNum: props.num, total : calTotal, 
            breadCrumbs: breadCrumbs + " " + displayText})

    }
    else{
        displayText = props.sym ? props.sym : "";
        if(displayText === "+")
        {
            if(props.engine.lastClicked != "+") //don't do anything if enter is pressed more than once in a row
            {

                if(props.engine.lastNum > 0 && props.engine.lastNum < 10)
                {
                    calTotal += props.engine.lastNum;

                }
                props.changeEngine({total: calTotal, lastNum:10 , lastClicked : "+",
                    breadCrumbs: breadCrumbs + " +"
                })
            }
        }
        else if(displayText === "=")
        {   
            if(props.engine.lastClicked != "=" && props.engine.lastClicked != "+") //don't do anything if enter is pressed more than once in a row
            {

            
            if(props.engine.lastNum > 0 && props.engine.lastNum < 10)
            {
                calTotal += props.engine.lastNum;
            }
            props.changeEngine({total: calTotal, lastNum:10 , lastClicked : "=",
                breadCrumbs: breadCrumbs + " = " + calTotal
            })
        }
        }
    }

    console.log(displayText + " was clicked!");
}

export const CalButtonNum = (props:CalButtonNumProp) =>{
    let displayText = "";
    if(props.num < 10)
    {
        displayText = props.num.toString();
    }
    else{
        displayText = props.sym ? props.sym : "";
    }
    // const [r1, changeR1] = useState("grey");
    let styles = {
        display: "inline-block",
        width: "50px",
        height: "50px",
        background: "grey",
    };
    
    return (<>
            <button style={styles} onClick={() => {handleClick(props)}}>{displayText}</button>
        </>);
}