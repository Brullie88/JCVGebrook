import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO string or date string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number; totalHours: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!targetDate) return null;

      // Handle Safari and other browsers that prefer / over - and spaces over T
      const normalizedDate = targetDate.replace(/-/g, '/').replace('T', ' ');
      const target = new Date(normalizedDate).getTime() || new Date(targetDate).getTime();
      
      const now = Date.now();
      const difference = target - now;

      if (isNaN(target) || difference <= 0) return null;

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        totalHours: Math.floor(difference / (1000 * 60 * 60)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
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

  const showSeconds = timeLeft.days < 8;

  return (
    <div className="flex gap-1.5 font-mono text-[10px] font-bold">
      {!showSeconds && (
        <div className="bg-carnaval-red text-white backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-white/20 shadow-lg">
          {timeLeft.days}d
        </div>
      )}
      <div className="bg-carnaval-yellow text-carnaval-charcoal backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-black/10 shadow-lg">
        {(showSeconds ? timeLeft.totalHours : timeLeft.hours).toString().padStart(2, '0')}u
      </div>
      <div className="bg-green-600 text-white backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-white/20 shadow-lg">
        {timeLeft.minutes.toString().padStart(2, '0')}m
      </div>
      {showSeconds && (
        <div className="bg-carnaval-red text-white backdrop-blur-sm px-1.5 py-0.5 rounded-lg border border-white/20 shadow-lg">
          {timeLeft.seconds.toString().padStart(2, '0')}s
        </div>
      )}
    </div>
  );
}
