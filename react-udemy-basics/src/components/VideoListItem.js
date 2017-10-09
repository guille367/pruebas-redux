import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
    return (
      <li className="list-group-item">
        <a href="" onClick={(e) => {e.preventDefault(); onVideoClick(video)}}>
          <div className="details">
            <div className="col-md-4">
              <img alt={video.snippet.title} src={imgUrl}/>
            </div>
            <div className="col-md-8">
              <p>{title}</p>
            </div>
          </div>
        </a>
      </li>
    );
}

export default VideoListItem;
