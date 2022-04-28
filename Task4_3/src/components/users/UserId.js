import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import "./users.scss"
import { peopleObj } from "../AllFakeData/fakeData"

const UserId = () => {
    const { userId } = useParams();
    let person = '';
    !!peopleObj && peopleObj.map(item => {
        if (item.id === userId) {            
            person = item.fullName
        }
        return person
    })

    return (
        <div className="UserId">   
            <h2>User: { person }</h2>
            <Link className="button_back" to="/users/UsersList">come back</Link>
        </div>
    )
}

export default UserId