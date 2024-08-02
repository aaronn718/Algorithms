import ListGroup from "./components/ListGroup";
import DataFetcher from './components/DataFetcher';
import getUserContext from "./components/ContextProvider";
import Rectangle from "./components/Rectangle";
import { useState } from "react";
import { Routes } from "./Routes";
import { PracticePage } from "./pages/PracticePage";
import { Calculator } from "./pages/Calculator";




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

  return (
    <div className="App">
      <header className="App-header">
        {/* <PracticePage /> */}
       <Calculator />
      </header>
    </div>
  );
}

export default App;