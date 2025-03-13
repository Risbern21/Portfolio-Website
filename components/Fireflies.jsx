"use client";
import React, { useState, useEffect } from "react";

const createFireflies = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  AnimationDuration: `${Math.random() * 5 + 5}s`,
});

const FireflyBackground = () => {
  const [Fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addfireflyperiodically = () => {
      const newFirefly = createFireflies();
      setFireflies((currentFireflies) => [
        ...currentFireflies.slice(-14),
        newFirefly,
      ]);
    };
    const interval = setInterval(addfireflyperiodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      {Fireflies.map((Firefly) => {
        return (
          <div
            key={Firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] fireflycolor"
            style={{
              top: Firefly.top,
              left: Firefly.left,
              animation: `movefirefly ${Firefly.AnimationDuration} ease-in infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireflyBackground;
