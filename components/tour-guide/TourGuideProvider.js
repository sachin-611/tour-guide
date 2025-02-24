import React, { createContext, useState, useCallback } from 'react';
import { View } from 'react-native';

export const TourGuideContext = createContext();

export const TourGuideProvider = ({
  children,
  steps,
  tooltipComponent: Tooltip,
  backdropColor = 'rgba(0,0,0,0.4)',
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentModule, setCurrentModule] = useState(null);
  const [updateFlat, setUpdateFlat] = useState(false);

  const start =  (modul) => {
    console.log(steps)
    console.log(modul)
    if (steps[modul]) {
      console.log("new module", steps[modul].steps);
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
      console.log("next", currentStep);
      setCurrentStep(currentStep + 1);
    } else {
      if(steps[currentModule].nextModule){
        console.log("module change ",steps[currentModule].nextModule);
        setCurrentStep(currentStep + 1);
        start(steps[currentModule].nextModule);
      }else{
        stop();
      }
    }
  };

  const update = ()=>{
    console.log("update")
    setUpdateFlat(!updateFlat);
  }

  const contextValue = { currentStep, isTourActive, steps, start, stop, next, currentModule ,update};
  console.log(currentModule, currentStep,steps[currentModule],steps[currentModule]?.steps)
  return (
    <TourGuideContext.Provider value={contextValue}>
      {children}
      {/* Render the tooltip if the tour is active */}
      {isTourActive && Tooltip && (
        <Tooltip step={steps[currentModule].steps[currentStep]} next={next} />
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