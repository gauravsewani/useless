import React, { useEffect, useRef } from "react";

const VideoComponent = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transparent");
    document.documentElement.style.setProperty("--mc2", "transparent");
    document.documentElement.style.setProperty("--hc", "transparent");
    document.documentElement.style.setProperty("--bc", "transparent");
  }, []);

  const videoRef = useRef(null);

  const updateVideoTime = () => {
    if (videoRef.current) {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Set the video duration to 38 seconds
      const videoDuration = 38;

      const newTime = (scrollY / maxScroll) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
    requestAnimationFrame(updateVideoTime);
  };

  useEffect(() => {
    requestAnimationFrame(updateVideoTime);

    return () => {
      cancelAnimationFrame(updateVideoTime);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{ position: "fixed", width: "100%", height: "auto" }}
        preload="auto"
      >
        <source src="test.mp4" type="video/mp4" />
      </video>
      <div style={{ height: "2000vh" }}>
        {" "}
        {/* This div is to make the page scrollable */}
      </div>
    </div>
  );
};

export default VideoComponent;
