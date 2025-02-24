// src/components/Popover.js
import React, { useLayoutEffect,useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Popover = ({ targetPosition, text, next }) => {
  if (!targetPosition) return null;

  const { x, y, width, height } = targetPosition;
  const curRef = useRef()
  const [top, setTop] = React.useState(0);
  // Position the popover 10 pixels below the target element.
  const popoverStyle = {
    position: 'absolute',
    top: top,
    left: 0
  };

  useLayoutEffect(() => {
    curRef.current.measure((fx, fy, width, curHeight, px, py) => {
      setTop(y + height + curHeight);
    });
  }, [y, height,curRef]);
  console.log("popover rendered");

  return (
    <View style={[styles.popover, popoverStyle]} ref={curRef}>
      <Text style={styles.popoverText}>{text}</Text>
      {next && (
        <TouchableOpacity style={styles.nextButton} onPress={next}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  popover: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 2,
  },
  popoverText: {
    color: '#333',
    marginBottom: 10,
  },
  nextButton: {
    alignSelf: 'flex-end',
    padding: 5,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  nextButtonText: {
    color: '#fff',
  },
});
