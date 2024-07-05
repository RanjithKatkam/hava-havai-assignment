import "./index.css";

function Sidebar() {
    return (
        <div className="sidebar-main-container">
            <div className="sections">
                <div className="sec">
                    <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720108864/Vector_nmkwxa.png" alt="home" />
                    <h3>Home</h3>
                </div>
                <div className="sec">
                    <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1720109003/Vector_1_gyc8dw.png" alt="dashboard" />
                    <h3>Dashboard</h3>
                </div>
            </div>
            <div className="services">
                <h2>Services</h2>
                <h3>Airports</h3>
                <h3>Videos</h3>
            </div>
            <div className="others">
                <h2>Others</h2>
                <h3>List 1</h3>
                <h3>List 2</h3>
                <h3>List 3</h3>
            </div>
        </div>
    );
}

export default Sidebar;
