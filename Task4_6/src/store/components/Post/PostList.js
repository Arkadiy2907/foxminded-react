import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../api";
import "./post.scss"
import PostForm from "./PostForm"

const PostList = () => {
    const posts = useSelector(state => state.posts)
    const [post, setPost] = React.useState(posts)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getPost())
    }, [dispatch]);

    React.useEffect(() => {
        posts.splice(0, posts.length - 5)
        setPost(posts)
    }, [posts]);

    return (
        <div className="wrapper">
            <div className="wrap_list">
                <h2>PostList</h2>
                <ul className="post_list">
                    {!!post && post.map((post, index) =>
                        <li key={index}>
                            <p>userId: {post.userId} </p>
                            &nbsp;
                            <p>ID: {post.id} </p>
                            &nbsp;
                            <p>TITLE: {post.title} </p>
                            &nbsp;
                            <p>POST: {post.body} </p>
                        </li>
                    )}
                </ul>
            </div>
            <PostForm />
        </div>
    )
}

export default PostList