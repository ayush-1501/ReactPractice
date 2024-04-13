import React from "react";
import { Label, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
import cart from "../../images/common/add-to-cart.png";
import { OutOfStock, FastTrackDelivery } from "./presentationComponents";
import useProductQuantity from "./useProductQuantity"; // Import the custom hook for quantity
import useProductColor from "./useProductColor"; // Import the custom hook for color
import { TbShoppingCartOff } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";

const priceTextStyles = mergeStyles({
  marginTop: "8px",
  color: "red",
  textAlign: "initial",
});

const marginTop = mergeStyles({
  marginTop: "8px",
});

const textAlign = mergeStyles({
  textAlign: "initial",
});

const stackStyles = {
  root: {
    padding: "8px 16px",
  },
};

const ItemDetails = (props) => {
  const { quantity, updateQuantity } = useProductQuantity(0);
  const { color, updateColor } = useProductColor(""); // Initial color can be an empty string or a default color

  const handleColorChange = (e) => {
    // Update color state using the custom hook's function
    updateColor(e.target.value);
  };

  const handleQuantityChange = (e) => {
    updateQuantity(parseInt(e.target.value));
  };

  const getDetails = () => (
    <>
      <Label className={textAlign}>{props.productDetails.name}</Label>
      <Text className={textAlign}>{props.productDetails.description}</Text>
      <Text className={priceTextStyles} variant="xLarge" block>
        ${props.productDetails.price * quantity}
      </Text>
      {
        props.stockAndDelivery === 1 ? <Text><TbShoppingCartOff /> Out of stock!</Text> :
          props.stockAndDelivery === 2 ? <Text><FaTruckFast /> Fast delivery!</Text> : null
      }
    </>
  );

  const getActions = () => (
    <>
      <Text block>Qty</Text>
      <select
        name="quantity"
        id="product-quantity"
        onChange={handleQuantityChange}
        value={quantity}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        {/* Add more quantity options as needed */}
      </select>

      {/* Add a color selector */}
      <Text block>Color</Text>
      <select
        name="color"
        id="product-color"
        onChange={handleColorChange}
        value={color}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        {/* Add more color options as needed */}
      </select>

      <div className={marginTop}>
        {props.stockAndDelivery !== 1 ?
          <img
            onClick={() => {
              props.onAddToCart(
                props.productDetails.id,
                props.productDetails.name,
                props.productDetails.description,
                props.productDetails.price,
                quantity,
                color
              );
            }}
            height="30px"
            src={cart}
            alt="Add to Cart"
          />
          :
          null
        }
      </div>
    </>
  );

  return (
    <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
      <StackItem>{getDetails()}</StackItem>
      <StackItem>{getActions()}</StackItem>
      <StackItem>
        <OutOfStock isOutOfStock={props.productDetails.isOutOfStock} />
        <FastTrackDelivery isFastTrackDelivery={props.productDetails.isFastTrackDelivery} />
      </StackItem>
    </Stack>
  );
};

export default ItemDetails;
