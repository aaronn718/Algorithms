import { MyRoutes } from "./Routes";
import "./App.css";
import Navbar from "./components/NavigationBar";


function App(){


  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <PracticePage /> */}
    //    <MyRoutes />
    //   </header>
    // </div>
    <div>
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;