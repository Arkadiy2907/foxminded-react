import UsersLi from "./UsersLi";
import { peopleObj } from "../AllFakeData/fakeData";

const UsersList = () => {
    return (
        <>
            <h2>Users</h2>
            <ul>
                {!!peopleObj && peopleObj.map((item, index) => {
                    return (
                        <UsersLi
                            name={ item.name } 
                            key={ index } 
                            id={ item.id }
                        />
                    )
                }
                )}            
            </ul>
        </>
    );
}

export default UsersList