import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTimer,startTimer,stopTimer,resetTimer } from '../utils/appSlice';
import TimerButton from './TimerButton';
import { resetFocusId } from '../utils/appSlice';
import { editEvent } from '../utils/userSlice';

const CountdownTimer = () => {
  const secondsLeft = useSelector((state) => state.app.timer.secondsLeft);
  const secondsAlloc = useSelector((state) => state.app.timer.secondsAlloc);
  const isRunning = useSelector((state) => state.app.timer.isRunning);
  const foucsId = useSelector((state) => state.app.focusId);

  const dispatch = useDispatch();

  useEffect(() => {
    let timer = null;
  
    const handleTimerEnd = async () => {
      const focusDuration = Math.ceil((secondsAlloc - secondsLeft) / 60);
      alert(`Time Up! ${focusDuration}`);
      if (foucsId) {
        await dispatch(editEvent({ id: foucsId, focusDuration }));
      }
      dispatch(resetTimer());
      dispatch(resetFocusId());
    };
  
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
    } else if (secondsLeft === 0) {
      handleTimerEnd();
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
        onPress ={ () => {
          dispatch(resetTimer())
          dispatch(resetFocusId())
          alert(`Focus Session Resetted`);
        }}
        iconName = {"stop-circle"}
        iconProvider = {"mui"}
        isDisabled = {isRunning || secondsLeft == secondsAlloc}
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
