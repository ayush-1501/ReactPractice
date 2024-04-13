import React from "react";
import { Stack, StackItem } from "@fluentui/react";
import ItemCard from "./itemCard";

const stackStyles = {
  inner: {
    justifyContent: "center",
  },
};

const random = () => {
  return Math.floor(Math.random() * 3);
}

function ItemSection(props) {
  return (
    <Stack horizontal tokens={{ childrenGap: "36" }} wrap styles={stackStyles}>
      {props.products?.map((product) => {
        return (
          <StackItem>
            <ItemCard productDetails={product} onAddToCart={props.onAddToCart} stockAndDelivery={random()}/>
          </StackItem>
        );
      })}
    </Stack>
  );
}

export default ItemSection;
