import React, { useState, useEffect } from "react";
import axios from "axios";

export function Clock() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://worldtimeapi.org/api/timezone/Etc/UTC").then((res) => {
        setCurrentTime(new Date(res.data.utc_datetime).toLocaleTimeString());
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
}
