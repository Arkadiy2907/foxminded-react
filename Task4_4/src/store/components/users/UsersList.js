import UsersLi from "./UsersLi";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../api";
import "./users.scss"

const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    users.splice(5, users.length)

    return (
        <>
            <h2>Users</h2>
            <button onClick={() => dispatch(getUsers())}>get new users</button>
            <ul className="users__ul">
                {!!users && users.map((item, index) => {
                    return (
                        <UsersLi
                            name={item.name}
                            key={index}
                            username={item.username}
                            item={item}
                        />
                    )
                }
                )}
            </ul>
        </>
    );
}

export default UsersList