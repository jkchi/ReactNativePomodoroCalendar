import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signIn,signUp } from "../utils/userSlice";
import { useDispatch,useSelector } from 'react-redux'


function InfoBox({ title, navigation,submitScreen, redirectScreen}) {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch  = useDispatch();

  const resetInput = () => {
    setname("")
    setEmail('');
    setPassword('');
  }


  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>{title}</Text>

      { title == "Register" ? <View style={styles.inputContainer}>
        <Ionicons
          name="id-card-outline"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Name"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setname(text)}
        />
      </View> : null}

      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email Address"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          placeholderTextColor="gray"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.redirectButton}
        onPress={ () => {
          resetInput();
          navigation.navigate(redirectScreen);
        }}
      >
        <Text style={styles.registerText}>{ title == 'Login' ? "register" : "login"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
                
        if (title === "Login"){

          // await only make sure thunk is done
          // but the redux state could possibly not updated
          // hence using if could still see the old state
          const signInThunkResult = await dispatch(signIn({email,password}));
          
          if (signInThunkResult.error !=  null){
            Alert.alert("Sign In Error", signInThunkResult.error.message,[{ text: "OK" }])
          }
        }

        else {
          const signupThunkResult = await dispatch(signUp({name,email,password}));
          console.log(signupThunkResult);
          if (signupThunkResult.error !=  null){
            Alert.alert("Sign up Error", signupThunkResult.error.message,[{ text: "OK" }])
          }
        }
        resetInput();

        }}
      >
        <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingTop: "30%",
    paddingBottom: "10%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  registerText: {
    alignSelf: "flex-end",
    color: "#007BFF",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  redirectButton: {
    alignSelf: "flex-end", 
  },
});

export default InfoBox;
