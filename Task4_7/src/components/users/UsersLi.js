import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const UsersLi = (props) => {
    return (
        <li>
            <Link to={`/${props.id}`}>
                {props.fullName}
            </Link>
        </li>
    )
}

UsersLi.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
}

export default UsersLi