import { useSelector } from 'react-redux';
import { Text, View,StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountdownTimer from './CountdownTimer';
import formatSec from '../utils/formatSec';

const PomodoroTimer = () => {

  const secondsAlloc = useSelector((state) => state.app.timer.secondsAlloc);
  const secondsLeft = useSelector((state) => state.app.timer.secondsLeft); 
  const isRunning = useSelector((state) => state.app.timer.isRunning);  
 
  const fillRate = (secondsAlloc - secondsLeft) / secondsAlloc * 100

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <AnimatedCircularProgress
        size={350}
        width={5}
        rotation = {0}
        fill={fillRate}
        tintColor="#007bff"
        backgroundColor="lightgray"
      >
        {() => (
          <>
            <Text style = {styles.timeText}>{formatSec(secondsLeft)}</Text>
            {!isRunning && (<Text style = {styles.pulseText}>Pulsed</Text>)}
          </>
        )}
      </AnimatedCircularProgress>
      <CountdownTimer/>
    </View>
  );
};

const styles = StyleSheet.create({
  timeText: {
    fontSize:60
  },
  pulseText: {
    fontSize:20,
    color:"lightgray"
  },
});


export default PomodoroTimer;
