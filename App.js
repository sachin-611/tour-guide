import { Button, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import FlatListItems from './components/flatlist/FlatListItems';
import {TourGuideProvider} from './components/tour-guide/TourGuideProvider';
import { tourSteps } from './steps';
import {Popover} from './components/popover/Popover';

export default function App() {

  return (
    <View style={{paddingTop: StatusBar.currentHeight, flex: 1}}>
      <TourGuideProvider
        steps={tourSteps}
        tooltipComponent={({ step, next }) => {
          console.log("step", step);
          return (
          <Popover targetPosition={step.targetPosition} text={step.text} next={next} />
        )}}
        backdropColor="rgba(0,0,0,0.5)">
          <FlatListItems />
      </TourGuideProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
