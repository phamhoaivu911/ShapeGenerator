import {View} from 'react-native';
import React from 'react';

import {TabBarIconProps} from '../types';

const SquareIcon: React.FC<TabBarIconProps> = ({color}) => {
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

const CircleIcon: React.FC<TabBarIconProps> = ({color}) => {
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

const TriangleIcon: React.FC<TabBarIconProps> = ({color}) => {
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

const HomeIcon: React.FC<TabBarIconProps> = ({color}) => {
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
