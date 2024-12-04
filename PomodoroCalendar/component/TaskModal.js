import { useState,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import TextInputBox from "./TextInputBox";
import PriorityPicker from "./PriorityPicker";
import TimePicker from "./TimePicker";
import calMinDiff from "../utils/calMinDiff";
import {useDispatch} from "react-redux";
import {addEvent,deleteEvent,editEvent} from "../utils/userSlice"
import isSameDay from "../utils/isSameDay";

export default TaskModal = ({ event, visible, onClose }) => {
  const [priority, setPriority] = useState("Low");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [showPriorityPicker, setShowPriorityPicker] = useState(false);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const dispatch = useDispatch()
  const colorMap = new Map()
  colorMap.set('Low', '#007bff');
  colorMap.set('Medium', 'orange');
  colorMap.set('High', 'red');

  const resetForm = () => {
    setPriority("Low")
    setTitle("")
    setDetail("")
    setStartTime(new Date())
    setEndTime(new Date())
    setShowPriorityPicker(false)
  }

  const handleSave = () => {

    const task = {
      title,
      priority,
      detail,
      start:{dateTime: startTime.toISOString()},
      end: {dateTime:endTime.toISOString()},
      duration: calMinDiff(startTime, endTime),
      focusDuration: 0,
      color:colorMap.get(priority),
    };

    if (endTime <= startTime) {
      alert("End time has to be larger than start time.");
    }
    else if(! isSameDay(startTime,endTime)){
      alert("end time and start time has to be in the same day.");
    } 
    else if (event != undefined){
      task.id = event.id;
      onClose();
      dispatch(editEvent(task))
    }

    else{
      dispatch(addEvent(task))
      onClose();
      resetForm();
    }
  };

  useEffect(() => {
    if (event) {
      setPriority(event.priority || "Low");
      setTitle(event.title);
      setDetail(event.detail || "");
      setStartTime(new Date(event.start.dateTime) || new Date());
      setEndTime(new Date(event.end.dateTime) || new Date());
    }
  }, [event]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          
          <View style={styles.header}>
            <TouchableOpacity onPress={
              () => {
              onClose()
              resetForm()
              }
              }>
              <Text style={styles.headerButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.headerButton}>Save</Text>
            </TouchableOpacity>
          </View>

          <TextInputBox
            text={"Event Title:"}
            placeHolder={"Title"}
            value={title}
            onChange={setTitle}
          />

          <TextInputBox
            text={"Event Detail:"}
            placeHolder={"Detail"}
            value={detail}
            onChange={setDetail}
          />

          <PriorityPicker
            visible={showPriorityPicker}
            setVisible={setShowPriorityPicker}
            text={"Priority"}
            data={priority}
            setData={setPriority}
          />

          <TimePicker
            text={"Start Time:"}
            visible={showStartPicker}
            setVisible={setShowStartPicker}
            data={startTime}
            setData={setStartTime}
          />

          <TimePicker
            text={"End Time:  "}
            visible={showEndPicker}
            setVisible={setShowEndPicker}
            data={endTime}
            setData={setEndTime}
          />

          <Text style = {styles.label}>
          {`Duration : ${calMinDiff(startTime, endTime)}`}
          </Text>

          <Text style = {styles.label}>
            {`Focus Duration : 0`}
          </Text>
          
          {event && (<View style = {styles.deleteBtnView}>
            <TouchableOpacity 
              style = {styles.deleteBtn}
              onPress={ () => 
                {
                  dispatch(deleteEvent(event.id))
                  onClose()
                }
              
              }
            >
              <Text >
                Delete
              </Text>
            </TouchableOpacity>
          </View>)}
 
          

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center", 
    alignItems: "center", 
  },
  modalContent: {
    width: "80%", 
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    alignItems:"flex-start",
    alignSelf: "center", 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  headerButton: {
    color: "#007AFF",
    fontSize: 18,
  },
  disHeaderButton: {
    color: "grey",
    fontSize: 18,
  },
  label: {
    color: "#000000", 
    fontSize: 18,
    marginBottom: 7,
  },
  deleteBtn:{
    backgroundColor:'red',
    borderRadius:10,
    padding:10,
    marginTop:10
  },
  deleteBtnView:{
    width: "100%",
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
