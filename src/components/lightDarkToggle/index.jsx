import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import './style.scss';

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
  // State to track the current mode (light or dark)
  const [islightMode, setLightMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setLightMode(!islightMode);
  };

  // Apply the selected mode's colors using CSS custom properties
  useEffect(() => {
    const colors = !islightMode
      ? {
          // Light Colors
          "--basicBlack": "rgba(13, 13, 13, 1)",
          
        }
      : {
          // Dark Colors
          "--basicBlack": "rgba(255, 255, 255, 1)",
        };

    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [islightMode]);

  return (
    <button className="toggleMode" onClick={toggleMode}>
      {islightMode ? <CiLight className="toggleIcon" /> : <MdDarkMode className="toggleIcon" />}
    </button>
  );
};

export default LightDarkToggle;