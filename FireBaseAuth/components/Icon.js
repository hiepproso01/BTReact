import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Icon = ({ name, size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};
