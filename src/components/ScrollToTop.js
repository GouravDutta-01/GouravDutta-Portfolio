import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fab
    color="primary"
      size="small"
      aria-label="scroll-to-top"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTop;
