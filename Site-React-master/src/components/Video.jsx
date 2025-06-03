import React, { useState } from 'react';
import "./css/Video.css";

const VideoGallery = () => {
  const [currentVideoId, setCurrentVideoId] = useState('QFaFIcGhPoM'); 

  const videoList = [
    { id: 1, name: 'ReactJS - Introduction', videoId: 'QFaFIcGhPoM' }, 
    { id: 2, name: 'Functional Components', videoId: 'Cla1WwguArA' }, 
    { id: 3, name: 'Class Components', videoId: 'lnV34uLEzis' }, 
    { id: 4, name: 'JSX', videoId: '9Tz2tY-ZEwQ' }, 
    { id: 5, name: 'useState', videoId: 'HXaCzGyuhYA' }, 
    { id: 6, name: 'useReducer', videoId: 'mcimoeGU5vc' }, 
    { id: 7, name: 'Context API', videoId: 'aAcI_FdfkA8' }, 
    { id: 8, name: 'useEffect', videoId: 'yMh77epE188' }, 
    { id: 11, name: 'Redux', videoId: 'u3KlatzB7GM' }, 
    { id: 12, name: 'React Router', videoId: 'TWz4TjSssbg' }, 
  ];

  const changeVideo = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const divkh = {
    height: "80px"
  }

  return (
    <div>
      <div id='Lessons' style={divkh}></div>
      <div id='Lessons' className="video-gallery">
        <div className="video-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentVideoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>

        <div className="video-playlist">
          <h2>Playlist</h2>
          <ul id="videoList">
            {videoList.map((video) => (
              <li
                key={video.id}
                className={`video-item ${currentVideoId === video.videoId ? 'active' : ''}`}
                onClick={() => changeVideo(video.videoId)}
                aria-label={`Play ${video.name}`}
              >
                {video.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={divkh}></div>
    </div>
  );
};

export default VideoGallery;