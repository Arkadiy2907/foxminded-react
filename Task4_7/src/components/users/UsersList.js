import UsersLi from "./UsersLi";
import { peopleObj } from "../AllFakeData/fakeData";

const UsersList = () => {
    return (
        <>
            <ul className="UsersList__ul">
                {!!peopleObj && peopleObj.map(item => {
                    return (
                        <UsersLi
                            fullName={item.fullName}
                            key={item.id}
                            id={item.id}
                        />
                    )
                }
                )}
            </ul>
        </>
    );
}

export default UsersList