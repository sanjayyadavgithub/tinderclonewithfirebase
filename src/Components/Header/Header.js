import React from 'react'
import './Header.css'
import { Link ,useHistory} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon  fontSize="large" className="header__icon"/>
                </IconButton>
                ): (
                <IconButton >
                    <PersonIcon  fontSize="large" className="header__icon"/>
                </IconButton>)}
            
            <Link to="/">
                <IconButton>
                    <WhatshotIcon  fontSize="large" className="header__icon"/>
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
