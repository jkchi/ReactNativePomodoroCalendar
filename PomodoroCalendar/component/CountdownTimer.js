import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimer,startTimer,stopTimer,resetTimer } from '../utils/appSlice';
import TimerButton from './TimerButton';

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
      dispatch(resetTimer())
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, secondsLeft, dispatch]);

  return (
    <View style={styles.container}>

      {isRunning === false 
        ? <TimerButton
          onPress ={ () => dispatch(startTimer())}
          iconName = {"play-circle-filled"}
          iconProvider = {"mui"}
          isDisabled = {false}
          style = {styles.timerButton}
        />

        : <TimerButton
          onPress ={ () => dispatch(stopTimer())}
          iconName = {"pause-circle"}
          iconProvider = {"mui"}
          isDisabled = {false}
          style = {styles.timerButton}
        />
      }

      <TimerButton
        onPress ={ () => dispatch(resetTimer())}
        iconName = {"stop-circle"}
        iconProvider = {"mui"}
        isDisabled = {isRunning}
        style = {styles.timerButton}
      />
    

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timerButton: {
    marginLeft:50,
    marginRight:50
  },
});

export default CountdownTimer;
