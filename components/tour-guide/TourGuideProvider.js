import React, { createContext, useState, useCallback } from 'react';
import { View } from 'react-native';
import {Popover} from '../popover/Popover'
export const TourGuideContext = createContext();

export const TourGuideProvider = ({
  children,
  steps,
  backdropColor = 'rgba(0,0,0,0.4)',
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentModule, setCurrentModule] = useState(null);
  const [updateFlat, setUpdateFlat] = useState(false);

  const start =  (modul) => {
    if (steps[modul]) {
      setCurrentModule(modul);
      setIsTourActive(true);
    }
  };

  const stop = useCallback(() => {
    setIsTourActive(false);
    setCurrentModule(null);
  }, []);

  const next = () => {
    if (currentModule && steps[currentModule].steps[currentStep + 1]) {
      setCurrentStep(currentStep + 1);
    } else {
      if(steps[currentModule].nextModule){
        setCurrentStep(currentStep + 1);
        start(steps[currentModule].nextModule);
      }else{
        stop();
      }
    }
  };

  const update = ()=>{
    setUpdateFlat(!updateFlat);
  }

  const contextValue = { currentStep, isTourActive, steps, start, stop, next, currentModule ,update};

  return (
    <TourGuideContext.Provider value={contextValue}>
      {children}
      {/* Render the tooltip if the tour is active */}
      {isTourActive && ( <>
        <Popover targetPosition={steps[currentModule].steps[currentStep].targetPosition} text={steps[currentModule].steps[currentStep].text} next={next} />
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
        </>
      )}
    </TourGuideContext.Provider>
  );
};