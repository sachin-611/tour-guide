// src/hooks/useTourGuide.js
import { useContext } from 'react';
import { TourGuideContext } from '../components/tour-guide/TourGuideProvider';

export const useTourGuide = () => {
  return useContext(TourGuideContext);
};
