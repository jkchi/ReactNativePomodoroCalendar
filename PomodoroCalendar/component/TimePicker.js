import {StyleSheet,View,Text} from "react-native";
import DatePicker from "@react-native-community/datetimepicker";

export default TimePicker = (props) =>{

  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      props.setData(selectedDate); 
    }
  };

  return (
    <View style = {styles.container}>
      <Text style={styles.label}>
        {`${props.text}`}
      </Text>

      <DatePicker
        value={props.data}
        mode = "datetime"
        themeVariant="light"
        onChange={handleChange}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginBottom:10,
    alignItems:'center'
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