import {Picker} from '@react-native-picker/picker';
import {Text, TouchableOpacity,StyleSheet,View} from "react-native";

export default PriorityPicker = (props) => {
  return(
    <>
    <View style = {styles.container}>
      <Text style={styles.label}>
        {`${props.text}:`}
      </Text>
      <TouchableOpacity 
        onPress={ () => {
          props.setVisible((prevState) => ! prevState);
        }}
        style = {styles.priorityButton}
      >

        <Text style={styles.label}>
          {props.data}
        </Text>

      </TouchableOpacity>
    </View>

      {props.visible && 
        (<View style={styles.pickerContainer}>
          <Picker
            selectedValue={props.data}
            onValueChange={props.setData}
            itemStyle = {{color:"black"}}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>)
      }

    </>
  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:"center"
  },
  priorityButton:{
    backgroundColor: "#F0F0F0", 
    marginBottom:10,
    borderRadius: 5,
    marginLeft:10,
    padding:3
  },
  label: {
    color: "#000000", 
    fontSize: 18,
    marginBottom: 5,
  },
  pickerContainer: {
    width: "100%",
    backgroundColor: "#F0F0F0", 
    borderRadius: 5,
    marginBottom: 15,
  },
  
})