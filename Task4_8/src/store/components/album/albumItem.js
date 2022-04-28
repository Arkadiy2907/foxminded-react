import PropTypes from "prop-types"

const AlbumItem = props => {
	return (
		<div className="albumItem">
			<p>{props.title}</p>
		</div>
	)
}

AlbumItem.propTypes = {
	title: PropTypes.string,
}

export default AlbumItem