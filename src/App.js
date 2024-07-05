import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import AirportDetails from "./Components/AirportDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/airport/:name" element={<AirportDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
