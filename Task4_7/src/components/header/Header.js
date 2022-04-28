import './header.scss'
import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {
    const [visible, setVisible] = React.useState(false)

    const toogle = () => setVisible((visibleList) => !visibleList)

    let rezultToggle = () => visible ? '/' : "/UsersList"
    
    return (
        <>
            <nav className='wrap__nav'>
                <Link className='button_nav' to={rezultToggle()} onClick={toogle}>
                    Users
                </Link>                
            </nav>
        </>
    );
}

export default Header;