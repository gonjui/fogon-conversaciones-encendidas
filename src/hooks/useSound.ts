
import { useEffect, useRef } from 'react';

export const useSound = (url: string) => {
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audio.current = new Audio(url);
    
    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current = null;
      }
    };
  }, [url]);

  const play = () => {
    if (audio.current) {
      // Reset the playback position and play
      audio.current.currentTime = 0;
      audio.current.play().catch(err => {
        console.error("Error playing sound:", err);
      });
    }
  };

  const stop = () => {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
  };

  return { play, stop };
};
