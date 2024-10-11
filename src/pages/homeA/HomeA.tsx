import React from "react";
import Chart from "../../components/chart/Chat";
import Featured from "../../components/featuredA/FeaturedA";
// import Widget from "../../components/widget/Widget";
// import List from "../../components/table/Table";
import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";

const Home: React.FC = () => {
    return (
        <div className="homeA">
            <Sidebar/>
            {/* <NavbarAd /> */}
            <div className="homeContainerA">
                <div className="widgetsA">
                    {/* <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/> */}
                </div>
                <div className="chartsA">
                    <Featured />
                    <Chart title="Election Votes" aspect={2/1} />
                </div>
            </div>
        </div>
    )
}

export default Home;
