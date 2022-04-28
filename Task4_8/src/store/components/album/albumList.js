import React from 'react';
import { useSelector } from "react-redux";
import AlbumItem from "../album/albumItem";
import "./album.scss"

const AlbumList = () => {
	const album = useSelector(state => state.album.album)

	return (
		<div className='wrap_albumList'>
			<h3>Album list</h3>
			<div className='albumList'>
				{!!album && album.map(item =>
					<AlbumItem
						title={item.title}
						key={item.id}
					/>
				)}
			</div>
		</div>
	)
}

export default AlbumList