import { Button, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import FlatListItems from './components/flatlist/FlatListItems';
import {TourGuideProvider} from './components/tour-guide/TourGuideProvider';
import { tourSteps } from './steps';

export default function App() {

  return (
    <View style={{paddingTop: StatusBar.currentHeight, flex: 1}}>
      <TourGuideProvider
        steps={tourSteps}
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
