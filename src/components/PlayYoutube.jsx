import React, { forwardRef } from "react";

const PlayYoutube = forwardRef(({ currentVideo }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full lg:min-h-screen bg-white flex items-center justify-center relative"
    >
      <div className="relative w-full pb-[56.25%]">
        {" "}
        {/* 16:9 Aspect Ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={currentVideo}
          title="از دست دادن عضویت در لیگ ملت ها | شاه امان الله خان | افغانستان🔥💥|League of Nations|"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
});

export default PlayYoutube;
