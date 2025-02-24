import React, { useRef, useEffect, useContext, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { TourGuideContext } from './TourGuideProvider';

export const TourStepZone = ({ zone, children, targetRef }) => {
  const { steps, currentModule ,update} = useContext(TourGuideContext);

  useLayoutEffect(() => {
    if (currentModule && steps[currentModule] && steps[currentModule].steps[zone]) {
      // Measure the element and update the step with its position.
      targetRef.current.measure((fx, fy, width, height, px, py) => {
        console.log(steps[currentModule].steps[zone]);
        steps[currentModule].steps[zone].targetPosition = { x: fx, y: fy, width, height };
        console.log(steps[currentModule].steps[zone]);
        console.log("location changed");
        update()
      });
    }
  }, [targetRef, zone, steps, currentModule]);

  return <View>{children}</View>;
};