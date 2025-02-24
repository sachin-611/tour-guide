// src/components/TourGuideProvider.js
import React, { createContext, useState, useCallback } from 'react';
import { View } from 'react-native';

export const TourGuideContext = createContext();

export const TourGuideProvider = ({
  children,
  steps,
  tooltipComponent: Tooltip,
  backdropColor = 'rgba(0,0,0,0.4)',
}) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isTourActive, setIsTourActive] = useState(false);

  const start = () => {
    if (steps && steps.length > 0) {
      setCurrentStep(0);
      setIsTourActive(true);
    }
  };

  const stop = useCallback(() => {
    setIsTourActive(false);
  }, []);

  const next = () => {
    if (currentStep < steps.length - 1) {
      console.log("next", currentStep);
      setCurrentStep(currentStep+1);
    } else {
      stop();
    }
  }

  const contextValue = { currentStep, isTourActive, steps, start, stop, next };

  return (
    <TourGuideContext.Provider value={contextValue}>
      {children}
      {/* Render the tooltip if the tour is active */}
      {isTourActive && Tooltip && (
        <Tooltip step={steps[currentStep]} next={next} />
      )}
      {/* Render a backdrop */}
      {isTourActive && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropColor,
            zIndex: 1
          }}
        />
      )}
    </TourGuideContext.Provider>
  );
};
