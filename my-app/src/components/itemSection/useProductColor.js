import { useState } from "react";

function useProductColor(initialColor = '') {
  const [color, setColor] = useState(initialColor);

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return {
    color,
    updateColor,
  };
}

export default useProductColor;
