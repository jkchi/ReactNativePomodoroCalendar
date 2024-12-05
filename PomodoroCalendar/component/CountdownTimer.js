import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimer,startTimer,stopTimer,resetTimer } from '../utils/appSlice';

const CountdownTimer = () => {
  const secondsLeft = useSelector((state) => state.app.timer.secondsLeft);
  const isRunning = useSelector((state) => state.app.timer.isRunning);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = null;

    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
    } else if (secondsLeft === 0) {
      alert('Time Up!');
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, secondsLeft, dispatch]);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={ () => dispatch(startTimer())}
      >

        <Text>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => dispatch(stopTimer())}
      >

        <Text>End</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => dispatch(resetTimer())}
      >
        <Text>Reset</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default CountdownTimer;
