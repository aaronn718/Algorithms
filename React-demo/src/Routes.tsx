import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calculator } from "./pages/Calculator";
import { PracticePage } from "./pages/PracticePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { WeatherPage } from "./pages/WeatherPage";
import { StepsPage } from "./pages/StepsPage";

//https://www.youtube.com/watch?v=xMYo9jaMah8&t=208s
export const MyRoutes = () =>
{
    return (<>
    <BrowserRouter>
        <Routes>
            {/* <Route index element ={<PracticePage />}></Route> */}
            <Route index element ={<Calculator />} />
            <Route path="/cal" element={<Calculator />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/steps" element={<StepsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
    </>);
}