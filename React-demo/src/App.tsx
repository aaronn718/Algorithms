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

  var userContext = getUserContext();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          user name is: {userContext.Name}
        </div>
        {/* <DataFetcher /> */}
        {/* <Rectangle width={100} height={200}> </Rectangle> */}
        {/* <Rectangle props={width: 100,height:200} /> */}
        <Rectangle width={300} height={500} color={rectColor} changeColor={changeRectColor}/>
        {/* pass a funciton */}
        <br></br>
          <button onClick={() => changeRectColor("Blue")}>Change to Blue</button>
          <button onClick={() => changeRectColor("Red")}>Change to Red</button>
      </header>
    </div>
  );
}

export default App;