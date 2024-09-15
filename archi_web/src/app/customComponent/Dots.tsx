import { useState, useEffect } from "react";
import styles from "./Dots.module.scss";

type PDot = {
  index: number;
  currentIndex: number;
  onClick: (index: number) => void;
};
const Dot: React.FC<PDot> = ({ index, currentIndex, onClick }) => {
  const selected = index === currentIndex;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      style={{
        width: 18,
        height: 18,
        backgroundColor: selected
          ? isDarkMode
            ? "white"
            : "black"
          : "transparent",
        borderRadius: 9999,
        margin: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => onClick(index)}
    >
      <div
        style={{
          position: "relative",
          width: 11,
          height: 11,
          borderRadius: 9999,
          backgroundColor: isDarkMode ? "white" : "black",
          cursor: "pointer",
        }}
      ></div>
    </div>
  );
};

type TDots = {
  limit: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
};

export const Dots: React.FC<TDots> = ({ limit, currentIndex, onDotClick }) => {
  return (
    <div style={{ position: "fixed", top: 0, left: 100, height: "100%" }}>
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Array(limit)
          .fill("")
          .map((_, index) => (
            <Dot
              key={index} // key 추가
              index={index}
              currentIndex={currentIndex}
              onClick={onDotClick}
            />
          ))}
      </div>
    </div>
  );
};
