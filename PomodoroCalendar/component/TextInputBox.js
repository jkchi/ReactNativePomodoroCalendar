import {Text, TextInput,StyleSheet} from "react-native";

export default TextInputBox = (props) =>{
  return(
    <>
      <Text style={styles.label}>{props.text}</Text>
        <TextInput
          style={styles.textInput}
          placeholder = {props.placeHolder}
          value = {props.value}
          onChangeText={props.onChange}
        />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    color: "#000000", 
    fontSize: 18,
    marginBottom: 5,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#F0F0F0", 
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#000000", 
  },
})