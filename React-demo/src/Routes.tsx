import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calculator } from "./pages/Calculator";
import { PracticePage } from "./pages/PracticePage";
import { NotFoundPage } from "./pages/NotFoundPage";

//https://www.youtube.com/watch?v=xMYo9jaMah8&t=208s
export const MyRoutes = () =>
{
    return (<>
    <BrowserRouter>
        <Routes>
            <Route index element ={<PracticePage />}></Route>
            <Route path="/cal" element={<Calculator />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
    </>);
}