import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AirportTable from "../AirportTable";
import "./index.css";

function Dashboard() {
    return (
        <div className="main-container">
            <Navbar />
            <div className="sub-container">
                <Sidebar />
                <div className="content-main-container">
                    <div className="content">
                        <div className="content-header">
                            <h1>Airports</h1>
                            <button>+ Add new</button>
                        </div>
                        <AirportTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
