import { useState } from "react";

function useProductQuantity(initialQuantity = 0) {
  
  const [quantity, setQuantity] = useState(initialQuantity);

  
  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  
  return {
    quantity,
    updateQuantity,
  };
}

export default useProductQuantity;
