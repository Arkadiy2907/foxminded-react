import PropTypes from "prop-types"
import { removePostAction } from "../../action/Action"
import { useDispatch } from "react-redux";

const PostItem = props => {
    const dispatch = useDispatch()
    const removePost = post => dispatch(removePostAction(post))
    
    return (
        <div className="postItem" onClick={() => removePost(props.item)}>
            <h3>{props.title}: </h3>
            <p>{props.body}</p>
            <button className='rm' onClick={() => removePost(props.item)}>
                &times;
            </button>            
        </div>
    )
}

PostItem.propTypes = {
    item: PropTypes.object,
    title: PropTypes.string,
    body: PropTypes.string
}

export default PostItem