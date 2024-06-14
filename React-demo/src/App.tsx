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
    
  return <> <div><ListGroup items={props.items} heading={props.heading} ></ListGroup></div>
  <div><ListGroup items={["Blue", "Red", "Yellow"]} heading="list 2" ></ListGroup></div>
  </>;
}

export default App;