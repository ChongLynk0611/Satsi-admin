import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';

import './NavLeft.css';

function NavLeft(props) {
    return (
        <div className="NavLeft">
            <div className="NL-title">
                <DashboardIcon style={{fontSize:"24px"}}/>
                <span>Dashboard</span>
            </div>
            <div className="List-btn">
                
            </div>
        </div>
    )
}

export default NavLeft

