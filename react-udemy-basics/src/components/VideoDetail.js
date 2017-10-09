import React from 'react';

const VideoDetail = ({ video }) => {
  
  if(!video.snippet){
     return null;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (  

    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;