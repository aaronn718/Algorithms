import ListGroup from "./components/ListGroup";
import DataFetcher from './components/DataFetcher';
import getUserContext from "./components/ContextProvider";


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

  var userContext = getUserContext();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          user name is: {userContext.Name}
        </div>
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;