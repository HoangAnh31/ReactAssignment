import { useState, useEffect } from "react";

const Countdown = () => {
  const [count, setCount] = useState(100);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive)
      setInterval(() => {
        timer = setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  return (
    <>
      <div>Countdown: {count}</div>
      <button onClick={handleStart} type="button" className="btn">
        Start
      </button>
      <button onClick={handleStop} type="button" className="btn bg-red-400">
        Stop
      </button>
    </>
  );
};

export default Countdown;
