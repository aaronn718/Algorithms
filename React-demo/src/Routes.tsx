import { BrowserRouter as Router, Route } from "react-router-dom";
import { Calculator } from "./pages/Calculator";

//https://www.youtube.com/watch?v=xMYo9jaMah8&t=208s
export const Routes = () =>
{
    return (<Router>
        <Route path="/">
            <Calculator />
        </Route>
    </Router>);
}