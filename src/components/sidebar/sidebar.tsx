import React, { useState, useContext, useEffect } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";

import AccountBoxIcon from '@mui/icons-material/AccountBox';

const SidebarDoctor: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const { dispatch } = useContext(DarkModeContext)!;
    const [activeLink, setActiveLink] = useState<string>(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (link === "/login") {
            navigate("/login");
        } else {
            navigate(link);
        }
    };

    return (
        <div className="SidebarDoc">
            <div className="topDoc">
                <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/")}>
                <div className="logoImageDoc"> ClearVote</div>

                </Link>
            </div>
            <hr />
            <div className="centerDoc">
                <ul>
                    <li className={activeLink === "/" ? "activeDoc" : ""} onClick={() => handleLinkClick("/")}>
                        <DashboardIcon className="iconDoc" />
                        <span>Home</span>
                    </li>
                    <li className={activeLink === "manifesto" ? "activeDoc" : ""} onClick={() => handleLinkClick("/manifesto")}>
                        <Person2OutlinedIcon className="iconDoc" />
                        <span>Election Manifesto</span>
                    </li>
                    <li>
                        <AccountBoxIcon className="iconDoc" />
                        <span>Election Results</span>
                    </li>
                    {/* <li className={activeLink === "/doctor/revenue_records" ? "activeDoc" : ""} onClick={() => handleLinkClick("/doctor/revenue_records")}>
                        <InsertChartIcon className="iconDoc" />
                        <span>Revenue Records</span>
                    </li> */}
                </ul>
            </div>
            <div className="bottomContainerDoc">
                <ul>
                    <li>
                        <NotificationsNoneIcon className="iconDoc" />
                        <span>Notifications</span>
                        <span className="notificationBadge">2</span>
                    </li>
                    <li >
                        <SettingsApplicationsIcon className="iconDoc" />
                        <span>Settings</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="iconDoc" />
                        <span>Logout</span>
                    </li>
                </ul>
                <Link to="/doctor/profile" style={{ textDecoration: "none" }} onClick={() => handleLinkClick("/doctor/profile")}>
                    <div className="profileDoc">
                        {/* <img src={vector} alt="Profile"/> */}
                        <div className="detailsDoc">
                            {/* <span className="nameDoc">Michael Smith</span> */}
                            {/* <span className="emailDoc">michaelsmith12@gmail.com</span> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SidebarDoctor;
