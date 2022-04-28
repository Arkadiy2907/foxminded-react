import PropTypes from "prop-types"

const PostItem = props => {
	return (
		<div className="postItem">
			<h3>{props.title}</h3>
			<p>{props.body}</p>
		</div>
	)
}

PostItem.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
}

export default PostItem