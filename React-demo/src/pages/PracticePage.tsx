import { useState } from "react";
import { useContext } from "react";
import getUserContext from "../components/ContextProvider";
import Rectangle from "../components/Rectangle";

export interface AppUser {
    Name: string,
    Age: number
  }



export const PracticePage = () =>
{
  const [rectColor, changeRectColor] = useState("blue");
  const [rectColor2, changeRectColor2] = useState("blue");
    const rectProps = {
        width: Number
      };

    var userContext = getUserContext();
    return (<>
        <div>
          user name is: {userContext.Name}
        </div>
        {/* <DataFetcher /> */}
        <div>
        <Rectangle width={300} height={500} color={rectColor} changeColor={changeRectColor}/>
        <br></br>
          <button onClick={() => changeRectColor("Blue")}>Change to Blue</button>
          <button onClick={() => changeRectColor("Red")}>Change to Red</button>
        </div>
        <div>
        <Rectangle width={200} height={200} color={rectColor2} changeColor={changeRectColor2}/>
        <br></br>
          <button onClick={() => changeRectColor2("Blue")}>Change to Blue</button>
          <button onClick={() => changeRectColor2("Red")}>Change to Red</button>
          </div>
    </>);
}