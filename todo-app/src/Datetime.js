import React, {useState, useEffect} from 'react'



const DateTime = () => {
  const [date, setdate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setdate(new Date()), 1000);

    return function clean() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2>time is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default DateTime;
