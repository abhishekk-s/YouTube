import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-3 shadow-lg w-80 bg-gray-100 cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
