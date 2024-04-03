/* eslint-disable react/prop-types */
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "200",
  };

  return (
    <YouTube
      videoId={`${youtubeId}`}
      onReady={(e) => e.target.pauseVideo()}
      opts={option}
    />
  );
};

export default VideoPlayer;
