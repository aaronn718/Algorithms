import { useState } from "react";
import { useContext } from "react";
import getUserContext from "../components/ContextProvider";
import Rectangle from "../components/Rectangle";
import {countContext} from "../components/ContextProvider"
import { Counter } from "../components/Counter";

export interface AppUser {
    Name: string,
    Age: number
  }



export const PracticePage = () =>
{
    //   let props = {
  //     items : ["Washington",
  //     "California",
  //     "Texas",
  //     "Florida",
  //     "MainItem"], 
  //     heading : "heading from main"
  //   };
    
  //   const handleSelectedItem = function(item: string){
  //     console.log(item);
  //   }


  // return <> <div><ListGroup items={props.items} heading={props.heading} onSelectItem={handleSelectedItem} ></ListGroup></div>
  // <div><ListGroup items={["Blue", "Red", "Yellow"]} heading="list 2"  onSelectItem={handleSelectedItem}></ListGroup></div>
  // </>;

  const [rectColor, changeRectColor] = useState("blue");
  const [rectColor2, changeRectColor2] = useState("blue");
    const rectProps = {
        width: Number
      };

    const [count, setCount] = useState(0);
    //because it's typescript, we got to define the values

    var userContext = getUserContext();
    return (<>
        <div>
          user name is: {userContext.Name}
        </div>
        <countContext.Provider value={{count, setCount}}>
          <Counter />
        </countContext.Provider>
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