import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import isoToTime from '../utils/isoToTime';
import { useDispatch, useSelector } from 'react-redux';
import isToday from '../utils/isToday';
import { setFocusId,resetFocusId } from '../utils/appSlice';

const FocusModal = (props) => {
  const allTasks = useSelector(state => state.user.events)
  const focusId = useSelector(state => state.app.focusId)
  const tasks = allTasks.filter(isToday);
  const dispatch = useDispatch()

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
    >
    <View style={styles.modalContainer}> 
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pick a task</Text>
          <TouchableOpacity
            onPress={() => {
              props.setVisible(false)
            }}
          >
            <Text style={styles.headerAction}>Ok</Text>
          </TouchableOpacity>
          
        </View>
  

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          <FlatList
            style={styles.flatListSize}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.taskItem}
                onPress={() =>{
                  if (item.id == focusId){
                    dispatch(resetFocusId())
                  }
                  else if (item.id != focusId){
                    dispatch(setFocusId(item.id))
                  }
                }}
              >

                <View style={styles.circleOutline} >
                  {item.id == focusId && <View style={styles.innerCircle} />}
                </View>
                <Text style={styles.taskText}>{item.title}</Text>
                <Text style={styles.taskTime}>{isoToTime(item.start.dateTime)}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    // flex: 0.2,
    width: '80%',
    height:'40%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerAction: {
    fontSize: 18,
    color: '#0056b3', 
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E6ED',
  },
  circleOutline: {
    width: 16,
    height: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#007bff',
    marginRight: 12,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 6, 
    backgroundColor: '#007bff', 
  },
  taskText: {
    fontSize: 14,
    flex: 1,
  },
  taskTime: {
    fontSize: 12,
    color: '#0056b3', 
  },
  flatListSize:{
    maxHeight: '80%' 
  }
});

export default FocusModal;
