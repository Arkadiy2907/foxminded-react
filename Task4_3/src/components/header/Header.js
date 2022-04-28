import {NavLink} from "react-router-dom";
import './header.scss'

const Header = () => {
    return (
        <>
            <nav>
                <ul className="header__list" >                    
                    <li><NavLink to="/Todo/TodoList">TodoList</NavLink></li>
                    <li><NavLink to="/post/PostList">PostList</NavLink></li>
                    <li><NavLink to="/users/UsersList">Users</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;