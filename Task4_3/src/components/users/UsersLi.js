import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const UsersLi = (props) => {
    const url = useLocation();
    return (
        <li>
            <Link to={`${url.pathname}/${props.id}`}>
                {props.name}
            </Link>
        </li>
    )
}

UsersLi.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}

export default UsersLi