import {Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import React, {useRef} from 'react';

import {Position} from '../types';

type DraggableViewProps = {
  size: number;
  position: Position;
  children: JSX.Element;
};

const DraggableView: React.FC<DraggableViewProps> = ({
  size,
  position,
  children,
}) => {
  const drag = useRef(
    new Animated.ValueXY({
      x: size / 2,
      y: size / 2,
    }),
  ).current;

  const onPanGestureEvent = Animated.event(
    [{nativeEvent: {x: drag.x, y: drag.y}}],
    {useNativeDriver: true},
  );

  return (
    <PanGestureHandler onGestureEvent={onPanGestureEvent}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            left: position.x - size / 2,
            top: position.y - size / 2,
          },
        ]}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateX: Animated.add(
                    drag.x,
                    new Animated.Value(-size / 2),
                  ),
                },
                {
                  translateY: Animated.add(
                    drag.y,
                    new Animated.Value(-size / 2),
                  ),
                },
              ],
            },
          ]}>
          {children}
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default DraggableView;
