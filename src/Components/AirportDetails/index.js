import { Breadcrumbs, defaultTheme, Item, Provider } from "@adobe/react-spectrum";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Terminals from "../Terminals";
import TerminalSerivces from "../TerminalServices";
import "./index.css";

function AirportDetails(params) {
    const airport = useParams();
    return (
        <div className="main-container">
            <Navbar />
            <div className="sub-container">
                <Sidebar />
                <div className="content-main-container">
                    <div className="content">
                        <Provider colorScheme="light" UNSAFE_className="breadcrumbs" theme={defaultTheme}>
                            <Breadcrumbs UNSAFE_className="bread">
                                <Item id="breadcurmbs-item1" href="/">
                                    Airports
                                </Item>
                                <Item id="breadcurmbs-item2" href="/airport/ragiv">
                                    {airport.name}
                                </Item>
                            </Breadcrumbs>
                        </Provider>
                        <h1 className="airport-heading">{airport.name}</h1>
                        <Terminals />
                        <TerminalSerivces />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AirportDetails;
