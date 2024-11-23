import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { signIn,signUp } from '../utils/AuthManager';

function InfoBox({ title, navigation,submitScreen, redirectScreen}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>{title}</Text>
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
          navigation.navigate(redirectScreen);
        }}
      >
        <Text style={styles.registerText}>{ title == 'Login' ? "register" : "login"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          if (title === "Login"){

            try{
              await signIn(email,password);
              navigation.navigate(submitScreen);
            }
            catch(error) {
              Alert.alert("Sign In Error", error.message,[{ text: "OK" }])
            }

          }

          else{
            try {
              await signUp(email, password);
              navigation.navigate("Home");
            } catch(error) {
              Alert.alert("Sign Up Error", error.message,[{ text: "OK" }])
            }
          }
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
