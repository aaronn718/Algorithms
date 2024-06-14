import ListGroup from "./components/ListGroup";

function App(){
    let props = {
      items : ["Washington",
      "California",
      "Texas",
      "Florida",
      "MainItem"], 
      heading : "heading from main"
    };
    
    const handleSelectedItem = function(item: string){
      console.log(item);
    }

  return <> <div><ListGroup items={props.items} heading={props.heading} onSelectItem={handleSelectedItem} ></ListGroup></div>
  <div><ListGroup items={["Blue", "Red", "Yellow"]} heading="list 2"  onSelectItem={handleSelectedItem}></ListGroup></div>
  </>;
}

export default App;