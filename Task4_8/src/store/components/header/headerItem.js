import { NavLink } from "react-router-dom";
import React from 'react';
import { useSelector } from "react-redux";
import PropTypes from "prop-types"
import "./header.scss"

const HeaderItem = ({ el, icon, name, onClick, to }) => {
	const todo = useSelector(state => state.todo.todo)

	return (
		<li className="nav_item">
			<NavLink
				to={to}
				className={({ isActive }) => isActive && !!todo.length ? "active" : 'nav__link'}
				onClick={() => onClick(el)}>
				{icon} {name}
			</NavLink>
		</li>
	);
}

HeaderItem.propTypes = {
	icon: PropTypes.object,
	el: PropTypes.number,
	name: PropTypes.string,
	to: PropTypes.string,
	onChange: PropTypes.func
}

export default HeaderItem;