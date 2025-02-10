import React, { useEffect, useState } from "react";
import VideoCard, { ADVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../Utils/Constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  console.log(videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const result = await response.json();
    setVideos(result.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos !== undefined && <ADVideoCard video={videos[0]} />}
      {videos !== undefined ? (
        videos.map((video) => (
          <Link to={`/watch?v=` + video.id} key={video.id}>
            <VideoCard video={video} />
          </Link>
        ))
      ) : (
        <h5>{`There is no Data match found`}</h5>
      )}
    </div>
  );
};

export default VideoContainer;
