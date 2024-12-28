// Bismillahirrahmanirrahim

// Elhamdullilahirabbul'alemin

"use client"
import React, { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function MmmPage() {
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
          'onReady': (event: { target: { playVideo: () => void; }; }) => {
            event.target.playVideo();
          }
        },
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'playlist': 'nGnrGoR2bt4' // Required for looping
        }
      });
    };
  }, []);

  return (
    <div>
      <div id="player" style={{ display: 'none' }}></div>
    </div>
  );
}

export default MmmPage;