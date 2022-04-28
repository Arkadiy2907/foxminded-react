import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { peopleObj } from "../AllFakeData/fakeData"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faCameraRetro, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import "./users.scss"

const UserId = () => {
	const { userId } = useParams();
	const [userData, setUserData] = React.useState(null)

	const memoPerson = React.useMemo(() => !!peopleObj && peopleObj.find(item => item.id === userId), [userId])

	React.useEffect(() => {
		setUserData(memoPerson)
	}, [memoPerson])

	return userData && (
		<>
			<div className="wrap__UserId">
				<div className="UserId">
					<div className="UserId__person">
						<h3>User: {userData.fullName}</h3>
					</div>
					<div className="UserId__block">
						<div className="UserId__block_icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div>
							{userData.email}
							<p>Email</p>
						</div>
					</div>
					<div className="UserId__block">
						<div className="UserId__block_icon">
							<FontAwesomeIcon icon={faPhoneAlt} />
						</div>
						<div>
							{userData.mobile}
							<p>Mobile</p>
						</div>
					</div>
					<div className="UserId__block">
						<div className="UserId__block_icon">
							<FontAwesomeIcon icon={faMapMarkerAlt} />
						</div>
						<div>
							{userData.work}
							<p>Work</p>
						</div>
					</div>
					<div className="UserId__block">
						<div className="UserId__block_icon">
							<FontAwesomeIcon icon={faCameraRetro} />
						</div>
						<div>
							{userData.social}
							<p>Social Channels</p>
						</div>
					</div>
					<div className="UserId__block">
						<div className="UserId__block_icon branch">
							<FontAwesomeIcon icon={faCodeBranch} />
						</div>
						<div>
							{userData.segments}
							<p>Segments</p>
						</div>
					</div>
				</div>
				<div className="wrap__btn__back">
					<Link className="button_back" to="/UsersList">come back users</Link>
				</div>
			</div>
		</>
	)
}

export default UserId