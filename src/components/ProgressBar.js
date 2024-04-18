import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { colorTheme } from '../constant';

const ProgressBar = ({ progress, duration,width }) => {
  const [anim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(anim, {
      toValue: progress,
      duration: duration || 1000, // Default duration is 1 second
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [progress, anim, duration]);

  return (
    <View style={[styles.container,{width:width}]}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: anim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colorTheme.blue,
  },
});

export default ProgressBar;
