import PostItem from "./PostItem"
import './post.scss'
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../api"

const PostList = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.post)   
    
    post.splice(5, post.length)     
    
    return (
        <>
            <h2>PostList</h2>
            <button onClick={() => dispatch(getPost())}>get new post</button>
            <div className="post__wrap" >
                {!!post && post.map((item, index) =>                   
                    <PostItem
                        item={item}
                        title={item.title}
                        body={item.body}
                        key={index}
                    />
                )}
            </div>
        </>
    )
}

export default PostList