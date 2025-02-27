import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Krupa", "Welcome to my Portfolio"];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      // Control forward and backward text animation
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // Check if the animation should pause and reverse
      if (isForward && endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      // Move to the next text when done
      if (!isForward && endValue <= 0) {
        setIsForward(true);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
        setEndValue(1);
      }
    }, 70);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [endValue, isForward, index, texts]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5rem", // Increased height for larger text
        overflow: "hidden", // Prevent text overflow
        fontSize: "3.5rem", // Increased font size
        fontWeight: "bold",
        whiteSpace: "nowrap",
        color: "#333", // Customize text color
      }}
    >
      {currentText}
    </div>
  );
};

export default TextChange;
