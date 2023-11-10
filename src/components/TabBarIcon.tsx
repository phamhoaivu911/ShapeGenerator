import {View} from 'react-native';
import React from 'react';

const SquareIcon = ({color}) => {
  return (
    <View
      style={{
        width: 16,
        height: 16,
        backgroundColor: color,
      }}
    />
  );
};

const CircleIcon = ({color}) => {
  return (
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: color,
      }}
    />
  );
};

const TriangleIcon = ({color}) => {
  return (
    <View
      style={{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 16,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
      }}></View>
  );
};

const HomeIcon = ({color}) => {
  return (
    <View
      style={{
        width: 24,
        height: 16,
        backgroundColor: color,
      }}
    />
  );
};

export default {
  HomeIcon,
  SquareIcon,
  CircleIcon,
  TriangleIcon,
};
