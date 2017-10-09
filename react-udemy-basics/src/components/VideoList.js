import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoClick}) => {
  if(videos.length <= 0)
    return (<div>Loading...</div>);
  
  return (
    <ul className="list-group">
      { videos.map((video) => { return <VideoListItem video={video} key={video.etag} onVideoClick={onVideoClick} />}) } 
    </ul>
  );
}

export default VideoList;