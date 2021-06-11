import React from 'react'
import './header.css';
import letterB from '../../assets/letter-b.svg';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum"
function Header() {
    return (
        <div className="header__logo">
            
            <IconButton className="header__icon">
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
                        <img src={letterB} alt="letter-b" className="letter__b"/>
                        <IconButton className="header__icon">
                     <ForumIcon className="header__icon"/>       
                        </IconButton>
    

        </div>
    )
}

export default Header
