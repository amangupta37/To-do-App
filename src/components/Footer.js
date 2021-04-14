import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';

function Footer() {
    return (
        <div className="footer">
            <div className="connect-author">
                <GitHubIcon  id="style-link"/>
                <LinkedInIcon id="style-link" />
                <PersonIcon id="style-link" />
            </div>
        </div>
    )
}

export default Footer
