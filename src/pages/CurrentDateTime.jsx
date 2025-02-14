import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const day = format(currentTime, "EEEE"); // Full day name (e.g., Sunday)
  const date = format(currentTime, "dd, MMMM yyyy"); // Full date (e.g., 04, April 2024)
  const time = format(currentTime, "hh:mm a"); // Time format (e.g., 12:45 PM)

  return (
    <div className="text-center mb-4">
      <h2 className="text-xl italic text-red-500 font-semibold">{day}</h2>
      <h1 className="text-3xl font-bold">{date}</h1>
      {/* <p className="text-lg text-gray-600">{time}</p> */}
    </div>
  );
};

export default CurrentDateTime;
