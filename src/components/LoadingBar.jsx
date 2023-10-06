import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center">
      {/* Full Screen Blurred Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg transform scale-[200]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Loading.mp4" type="video/mp4" />
      </video>

      {/* Normal Video with Width of Screen */}
      <video
        className="absolute w-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loading;
