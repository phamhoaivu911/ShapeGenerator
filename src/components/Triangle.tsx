// Generated by ChatGPT

import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

import useRandomColor from '../hooks/useRandomColor';
import useRandomSize from '../hooks/useRandomSize';

interface TriangleProps {
  position: {
    x: number;
    y: number;
  };
}

const Triangle: React.FC<TriangleProps> = ({position}) => {
  const color = useRandomColor();
  const size = useRandomSize();

  // Define the triangle's border widths to create the triangle shape
  const borderStyles: ViewStyle = {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: size / 2,
    borderRightWidth: size / 2,
    borderBottomWidth: size,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color,
    position: 'absolute',
    left: position.x - size / 2,
    top: position.y - size / 2,
  };

  return <View style={[styles.triangle, borderStyles]} />;
};

const styles = StyleSheet.create({
  triangle: {
    // You can add additional styles for the triangle container here
  },
});

export default Triangle;
