import React from 'react';
import { useSelector } from "react-redux";
import PostItem from "../post/PostItem";
import "./post.scss"

const PostList = () => {
	const post = useSelector(state => state.post.post)

	return (
		<div className='wrap_postList'>
			<h3>Post list:</h3>
			<div className='postList'>
				{!!post && post.map(item =>
					<PostItem
						title={item.title}
						body={item.body}
						key={item.id}
					/>
				)}
			</div>
		</div>
	)
}

export default PostList