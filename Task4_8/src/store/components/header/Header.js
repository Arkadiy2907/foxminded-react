import React from 'react';
import { useDispatch } from "react-redux";
import { getPost, getAlbum, getTodo } from "../../../api";
import { resetAll } from "../../action/Action"
import HeaderItem from "./headerItem";
import { arrUserId } from '../AllFakeData/ArrUserId';
import "./header.scss"

const Header = () => {
	const dispatch = useDispatch()

	const toggleId = i => {
		dispatch(resetAll())
		dispatch(getPost(i))
		dispatch(getAlbum(i))
		dispatch(getTodo(i))
	}

	return (
		<>
			<nav className='wrap__nav'>
				<ul>
					{!!arrUserId && arrUserId.map(item => {
						return (
							<HeaderItem
								el={item.indexId}
								icon={item.icon}
								name={item.name}
								key={item.indexId}
								onClick={toggleId}
								to={item.to}
							/>
						)
					})
					}
				</ul>
			</nav>
		</>
	);
}

export default Header;