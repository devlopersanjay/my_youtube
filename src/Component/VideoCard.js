import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-1 w-64">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt={thumbnails.title}
      />
      <ul>
        <li className="font-bold py-2 break-words">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

// HOC example
export const ADVideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-1 w-64 border border-gray-400 shadow-sm">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt={thumbnails.title}
      />
      <ul>
        <li className="font-bold py-2 break-words">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
