import "./dashBoardMini.css"

function DashboardMini() {
    return (
        <section className='dashBoardMini'>
            <div className="dashBoardMiniItems">
                <i className="fa-solid fa-user"></i>
                <div className="data">
                    <strong>90+</strong>
                    <p>Users</p>
                </div>
            </div>
            <div className="dashBoardMiniItems">
                <i className="fa-solid fa-location-dot"></i>
                <div className="data">
                    <strong>30+</strong>
                    <p>Locations</p>
                </div>
            </div>
            <div className="dashBoardMiniItems">
                <i className="fa-solid fa-server"></i>
                <div className="data">
                    <strong>50+</strong>
                    <p>Servers</p>
                </div>
            </div>
        </section>
    )
}
export default DashboardMini