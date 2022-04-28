import PropTypes from "prop-types"

const PostItem = (props) => {
    return (
        <div className="postItem" >
            <img src={ props.avatar } alt="user avatar" />
            <h3>{ props.name }</h3>
            <p>{ props.message }</p>
        </div>
    )
}

PostItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string
}

export default PostItem