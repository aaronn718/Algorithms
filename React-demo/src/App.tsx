import ListGroup from "./components/ListGroup";

function App(){
   const items2 = [
        "Washington",
        "California",
        "Texas",
        "Florida",
        "from main app"
    ];
  return <div>{ListGroup(items2)}</div>;
}

export default App;