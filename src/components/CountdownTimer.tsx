import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO string or date string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!targetDate) return null;

      // Handle Safari and other browsers that prefer / over - and spaces over T
      // We try the most common compatible format first
      const normalizedDate = targetDate.replace(/-/g, '/').replace('T', ' ');
      const target = new Date(normalizedDate).getTime() || new Date(targetDate).getTime();
      
      const now = Date.now();
      const difference = target - now;

      if (isNaN(target) || difference <= 0) return null;

      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-2 text-carnaval-red font-mono text-xs font-bold">
      <div className="bg-carnaval-red/10 px-2 py-1 rounded border border-carnaval-red/20 shadow-inner">
        {timeLeft.hours.toString().padStart(2, '0')}u
      </div>
      <div className="bg-carnaval-red/10 px-2 py-1 rounded border border-carnaval-red/20 shadow-inner">
        {timeLeft.minutes.toString().padStart(2, '0')}m
      </div>
      <div className="bg-carnaval-red/10 px-2 py-1 rounded border border-carnaval-red/20 shadow-inner">
        {timeLeft.seconds.toString().padStart(2, '0')}s
      </div>
    </div>
  );
}
