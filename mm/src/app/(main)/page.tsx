// Bismillahirrahmanirrahim

// Elhamdullilahirabbul'alemin

import React, { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function page() {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = function() {
      new window.YT.Player('player', {
        videoId: 'nGnrGoR2bt4', // Replace with your YouTube video ID
        events: {
          'onReady': (event: { target: { playVideo: () => void; mute: () => void; }; }) => {
            event.target.playVideo();
            event.target.mute(); // Mute the video if you only want the audio
          }
        },
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'playlist': 'YOUR_VIDEO_ID' // Required for looping
        }
      });
    };
  }, []);

  return (
    <div>
      <div id="player"></div>
    </div>
  );
}

export default page;
