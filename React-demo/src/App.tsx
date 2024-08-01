import ListGroup from "./components/ListGroup";
import DataFetcher from './components/DataFetcher';
import getUserContext from "./components/ContextProvider";
import Rectangle from "./components/Rectangle";
import { useState } from "react";


export interface AppUser {
  Name: string,
  Age: number
}

function App(){
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
  const rectProps = {
    width: Number
  };

  const [rectColor, changeRectColor] = useState("blue");
  const [rectColor2, changeRectColor2] = useState("blue");

  var userContext = getUserContext();
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;