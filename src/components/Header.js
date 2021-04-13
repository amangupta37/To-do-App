import React from 'react';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

function Header() {
    return (
        <div className="Title-txt">
        <div className="Outline-l">
             <FormatListBulletedOutlinedIcon />
        </div>
        <div className="txt">
              <h1>To-Do List</h1>
        </div>
    </div>
    )
}

export default Header;
