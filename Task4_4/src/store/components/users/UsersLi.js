import PropTypes from 'prop-types'
import { removeUserAction } from "../../action/Action"
import { useDispatch } from "react-redux";

const UsersLi = props => {
    const dispatch = useDispatch()
    const removeUser = users => dispatch(removeUserAction(users))

    return (
        <li onClick={() => removeUser(props.item)}>
            name: {props.name}
            &nbsp;
            username: {props.username}
        </li>
    )
}

UsersLi.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
    item: PropTypes.object
}

export default UsersLi