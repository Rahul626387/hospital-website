
"use client";

import React from "react";

export default function EmergencyVideoSection() {
//   const videoUrl ="https://cdn.coverr.co/videos/coverr-doctor-working-in-a-hospital-1573/1080p.mp4";
  const videoUrl ="/videos/eg.mp4";

  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-black sm:h-[600px] lg:h-[700px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

