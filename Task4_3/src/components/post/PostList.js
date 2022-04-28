import PostItem from "./PostItem"
import './post.scss'
import { postEl } from "../AllFakeData/fakeData"

const PostList = () => {
    return (
        <>
            <h2>PostList</h2>
            <div className="post__wrap" >
                {!!postEl && postEl.map(item =>
                    <PostItem
                        avatar={item.avatar}
                        name={item.name}
                        message={item.message}
                        key={item.id}
                    />)}
            </div>
        </>
    )
}

export default PostList