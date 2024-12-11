import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useState } from 'react';
import TimePickerModal from './TimePickerModal';
import CountdownTimer from './CountdownTimer';
import formatSec from '../utils/formatSec';
import { editTimer } from '../utils/appSlice';
const PomodoroTimer = () => {
  const secondsAlloc = useSelector((state) => state.app.timer.secondsAlloc);
  const secondsLeft = useSelector((state) => state.app.timer.secondsLeft);
  const isRunning = useSelector((state) => state.app.timer.isRunning);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('25');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fillRate = ((secondsAlloc - secondsLeft) / secondsAlloc) * 100;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <AnimatedCircularProgress
        size={350}
        width={5}
        rotation={0}
        fill={fillRate}
        tintColor="#007bff"
        backgroundColor="lightgray"
      >
        {() => (
          <>
            <TouchableOpacity 
              onPress={
                () => setIsModalVisible(true)
              }
              disabled = {isRunning || secondsLeft != secondsAlloc}
            >
              <Text style={styles.timeText}>{formatSec(secondsLeft)}</Text>
            </TouchableOpacity>
            {!isRunning && <Text style={styles.pauseText}>Pulsed</Text>}
          </>
        )}
      </AnimatedCircularProgress>
      <CountdownTimer />
      <TimePickerModal
        visible = {isModalVisible}
        setVisible = {setIsModalVisible}
        data = {selectedValue}
        setData = {setSelectedValue}
        handleSubmit = {(value) => {
          dispatch(editTimer(value));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeText: {
    fontSize: 60,
  },
  pauseText: {
    fontSize: 20,
    color: "lightgray",
  },
});

export default PomodoroTimer;