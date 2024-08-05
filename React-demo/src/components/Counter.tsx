// import React, { useContext, useState } from "react";
// import getUserContext, { setUserContext } from "./ContextProvider";
// import { AppUser } from "../App";

import { useContext } from "react";
import { countContext } from "./ContextProvider";

// function CounterUI(){<q><q></q></q>
//     var user = getUserContext();
//     //const user = useContext<AppUser>();
    
//     return <div>
//         <button type="button" onClick={() => {setUserContext(user.Age-1); console.log("- was clicked");}}>-</button>
//         <span>User is: {user.Age} years old</span>
//         <button>+</button>
//     </div>
// }


// export default CounterUI;
//demo prop drilling prevention
export const Counter = () => {
    const context = useContext(countContext);

    return (<>
        <label>Count is: {context?.count}</label>
        <p />
            <CountButton />
        </>);
}

const CountButton = () => {
    const context = useContext(countContext);

    return (<>
        <button onClick={() => context?.setCount(context.count + 1) }>Increase Count</button>
        </>);
}