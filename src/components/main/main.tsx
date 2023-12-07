import Banner from "../banner/banner";
import Comment from "../comment/comment";
import DashboardMini from "../dashBoardMini/dashboardMini";
import Plan from "../plan/plan";



import "./main.css"

function Main():JSX.Element{
    return(
        <main>
            <Banner/>
            <DashboardMini/>
            <section className="option">
                <img src="/asset/img/h2.jpg" alt="" />
                <div className="optionLeft">
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <div className="optionLeftChecks">
                        <i className="fa-solid fa-circle-check"></i>
                        <p>Powerfull online protection.</p>
                    </div>
                    <div className="optionLeftChecks">
                        <i className="fa-solid fa-circle-check"></i>
                        <p>Internet without borders.</p>
                    </div>
                    <div className="optionLeftChecks">
                        <i className="fa-solid fa-circle-check"></i>
                        <p>Supercharged VPN.</p>
                    </div>
                    <div className="optionLeftChecks">
                        <i className="fa-solid fa-circle-check"></i>
                        <p>No specific time limits.</p>
                    </div>
                </div>
            </section>
            <Plan/>
            <section className="location">
                <div className="locationTitle">
                    <h1>Huge Global Network of Fast VPN</h1>
                    <p>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</p>
                </div>
                <img src="/asset/img/map.jpg" alt="" />
                <img src="/asset/img/z4950810606051_3f26ea22a1dd64eeec5bb8e3a7dc3257.jpg" alt="" />
            </section>
            <Comment/>
        </main>
    )
}
export default Main;