import React, { useState, useEffect } from 'react';

function ISOClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'Asia/Ho_Chi_Minh',
  hour12: false
});

console.log(formatter.format(date));
  
return (
    <div>{formatter.toString()}</div>
  );
}

export default ISOClock;