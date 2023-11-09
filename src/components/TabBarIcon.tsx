import {View} from 'react-native';
import React from 'react';

const SquareIcon = ({color}) => {
  return (
    <View
      style={{
        width: 12,
        height: 12,
        backgroundColor: color,
      }}
    />
  );
};

const CircleIcon = ({color}) => {
  return (
    <View
      style={{
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: color,
      }}
    />
  );
};

const HomeIcon = ({color}) => {
  return (
    <View
      style={{
        width: 24,
        height: 12,
        backgroundColor: color,
      }}
    />
  );
};

export default {
  HomeIcon,
  SquareIcon,
  CircleIcon,
};
