import { useEffect, useState } from "react";

export const useCountdown = (initialTime: number) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    return { timeLeft, formatTime };
  };
  