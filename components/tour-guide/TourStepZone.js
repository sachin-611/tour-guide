// src/components/TourStepZone.js
import React, { useRef, useEffect, useContext, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { TourGuideContext } from './TourGuideProvider';

export const TourStepZone = ({ zone, children ,targetRef}) => {
  const { steps } = useContext(TourGuideContext);

  useLayoutEffect(() => {
    if (steps[zone]) {
      // Measure the element and update the step with its position.
      targetRef.current.measure((fx, fy, width, height, px, py) => {
        steps[zone].targetPosition = { x: fx, y: fy, width, height };
        console.log("location changed")
      });
    }
  }, [targetRef, zone, steps]);

  return <View>{children}</View>;
};
