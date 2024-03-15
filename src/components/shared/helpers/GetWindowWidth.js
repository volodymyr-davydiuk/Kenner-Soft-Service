import { useState, useEffect } from "react";

const GetWindowWidth = () => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    setWidth();

    function setWidth() {
      setWindowSize(document.documentElement.clientWidth);
    }

    window.addEventListener('resize', setWidth);

    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, [windowSize]);

  return windowSize;
};

export default GetWindowWidth;
