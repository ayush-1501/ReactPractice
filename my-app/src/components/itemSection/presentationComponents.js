import React from "react";
import { Text, mergeStyles } from "@fluentui/react";
import { Icon } from '@fluentui/react'; // Assuming Fluent UI's Icon component

// Styles for the presentation components
const presentationStyles = mergeStyles({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
});

const iconStyles = mergeStyles({
  marginRight: '8px',
});

const OutOfStock = ({ isOutOfStock }) => {
  if (!isOutOfStock) {
    return null;
  }

  return (
    <div className={presentationStyles}>
      {/* Change the icon to a different Fluent UI icon */}
      <Icon iconName="CircleFill" className={iconStyles} style={{ color: 'red' }} />
      <Text variant="small" styles={{ color: 'red' }}>
        Out of Stock!
      </Text>
    </div>
  );
};

const FastTrackDelivery = ({ isFastTrackDelivery }) => {
  if (!isFastTrackDelivery) {
    return null;
  }

  return (
    <div className={presentationStyles}>
      {/* Change the icon to a different Fluent UI icon */}
      <Icon iconName="FastMode" className={iconStyles} style={{ color: 'green' }} />
      <Text variant="small" styles={{ color: 'green' }}>
        Eligible for Fast Track Delivery!
      </Text>
    </div>
  );
};

export { OutOfStock, FastTrackDelivery };
