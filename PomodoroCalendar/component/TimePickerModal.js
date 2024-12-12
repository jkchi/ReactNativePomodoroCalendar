import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TimePickerModal = (props) => {

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Duration</Text>
            <Picker
              selectedValue={props.data}
              onValueChange={(itemValue) => props.setData(itemValue)}
              style={{ width: '80%' }}
              itemStyle = {{color:"black"}}
            >
              {[0.05,10,15, 20, 25, 30, 35].map((value) => (
                <Picker.Item key={value} label={`${value} Min`} value={String(value)} />
              ))}
            </Picker>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => props.setVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={
                  () => {
                    props.setVisible(false)
                    props.handleSubmit(props.data)
                  }}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
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
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  cancelButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  confirmButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TimePickerModal;
