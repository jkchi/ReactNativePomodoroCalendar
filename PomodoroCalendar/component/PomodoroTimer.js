import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useState } from 'react';
import TimePickerModal from './TimePickerModal';
import CountdownTimer from './CountdownTimer';
import formatSec from '../utils/formatSec';
import { editTimer } from '../utils/appSlice';
import FocusModal from './FocusModal';


const PomodoroTimer = () => {
  const secondsAlloc = useSelector((state) => state.app.timer.secondsAlloc);
  const secondsLeft = useSelector((state) => state.app.timer.secondsLeft);
  const isRunning = useSelector((state) => state.app.timer.isRunning);
  const selectEvent = useSelector(state => state.user.focusId)
  const dispatch = useDispatch();

  const [selectedTime, setSelectedTime] = useState('25');
  const [isTimeModalVisible, setISTimeModalVisible] = useState(false);
  const [isFocusModalVisible, setISFocusModalVisible] = useState(false);

  const focusId = useSelector(state => state.app.focusId)

  const focusEvent = focusId !== undefined
    ? useSelector(state => state.user.events)
        .find((item) => item.id === focusId)
    : undefined;

  const fillRate = ((secondsAlloc - secondsLeft) / secondsAlloc) * 100;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => setISFocusModalVisible(true)}
      >
        <Text style = {styles.headerTitle}>
          {focusEvent === undefined
            ?(<>
              <Text >Foucs Task</Text>
              <Text style = {styles.headerTitleGrey}>{" >"}</Text>
            </>)
            :focusEvent.title
          }
        </Text>
      </TouchableOpacity>

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
                () => setISTimeModalVisible(true)
              }
              disabled = {isRunning || secondsLeft != secondsAlloc}
            >
              <Text style={styles.timeText}>{formatSec(secondsLeft)}</Text>
            </TouchableOpacity>
            {(!isRunning && secondsLeft !== secondsAlloc) && <Text style={styles.pauseText}>Pulsed</Text>}
          </>
        )}
      </AnimatedCircularProgress>

      <CountdownTimer />

      <TimePickerModal
        visible = {isTimeModalVisible}
        setVisible = {setISTimeModalVisible}
        data = {selectedTime}
        setData = {setSelectedTime}
        handleSubmit = {(value) => {
          dispatch(editTimer(value));
        }}
      />

      <FocusModal
        visible = {isFocusModalVisible}
        setVisible = {setISFocusModalVisible}
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
  headerView:{
    flexDirection:"column"
  },
  headerTitle: {
    fontSize: 25,
    margin:20,
  },
  headerTitleGrey: {
    color:'grey'
  },
});

export default PomodoroTimer;