import { Component } from "react";
import { Cell, Column, defaultTheme, Provider, Row, TableBody, TableHeader, TableView } from "@adobe/react-spectrum";
import { Link } from "react-router-dom";
import "./index.css";

const airportsDataList = [
    {
        id: 1,
        airportName: "Rajiv Gandhi International Airport",
        country: "India",
        code: "HYD",
        terminals: 3,
    },
    {
        id: 2,
        airportName: "Chhatrapati Shivaji Maharaj International Airport",
        country: "India",
        code: "BOM",
        terminals: 2,
    },
    {
        id: 3,
        airportName: "Indira Gandhi International Airport",
        country: "India",
        code: "DEL",
        terminals: 3,
    },
    {
        id: 4,
        airportName: "Los Angeles International Airport",
        country: "USA",
        code: "LAX",
        terminals: 9,
    },
    {
        id: 5,
        airportName: "Heathrow Airport",
        country: "UK",
        code: "LHR",
        terminals: 5,
    },
    {
        id: 6,
        airportName: "Charles de Gaulle Airport",
        country: "France",
        code: "CDG",
        terminals: 3,
    },
    {
        id: 7,
        airportName: "Sydney Airport",
        country: "Australia",
        code: "SYD",
        terminals: 3,
    },
    {
        id: 8,
        airportName: "Dubai International Airport",
        country: "UAE",
        code: "DXB",
        terminals: 3,
    },
    {
        id: 9,
        airportName: "Singapore Changi Airport",
        country: "Singapore",
        code: "SIN",
        terminals: 4,
    },
];

class AirportTable extends Component {
    render() {
        return (
            <Provider UNSAFE_className="table" theme={defaultTheme} colorScheme="light">
                <TableView aria-label="Example table with static contents" selectionMode="multiple">
                    <TableHeader>
                        <Column>All Airports ↓</Column>
                        <Column maxWidth={120} align="end">
                            Country
                        </Column>
                        <Column maxWidth={190} align="end">
                            Code
                        </Column>
                        <Column maxWidth={130} align="end">
                            Terminals
                        </Column>
                        <Column align="end" maxWidth={110}></Column>
                        <Column maxWidth={10}></Column>
                    </TableHeader>
                    <TableBody>
                        {airportsDataList.map((item) => (
                            <Row key={item.id}>
                                <Cell>
                                    <Link className="link" to={`/airport/${item.airportName}`}>
                                        {item.airportName}
                                    </Link>
                                </Cell>
                                <Cell>{item.country}</Cell>
                                <Cell>{item.code}</Cell>
                                <Cell>{item.terminals}</Cell>
                                <Cell>
                                    <button id={item.id} className="eit">
                                        <img alt="edit" src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720121103/Edit_vejahq.png" />
                                    </button>
                                </Cell>
                                <Cell>
                                    <button id={item.id} className="eit">
                                        <img
                                            alt="delete"
                                            src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720121103/Delete_wptpsf.png"
                                        />
                                    </button>
                                </Cell>
                            </Row>
                        ))}
                    </TableBody>
                </TableView>
            </Provider>
        );
    }
}

export default AirportTable;
