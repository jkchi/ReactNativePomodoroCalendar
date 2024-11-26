import { Button } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { signOut } from "../utils/userSlice";
import { useDispatch,useSelector } from 'react-redux'


function HomeScreen({navigation}) {
  const userData = useSelector((state) => state.user.userData);
  const dispatch  = useDispatch();


  return (
    <View style={styles.container}>
      
      {/* <MainNavigator/> */}
      {/* useEffect is trigger after component rerender
      and userData will be null, here use .? */}
      <Text>`hi {userData?.email}`</Text>
      <Button
        onPress={async () => {
            const signOutResult =  await dispatch(signOut());

            if (signOutResult.error !=  null){
              Alert.alert("Sign out Error", signOutResult.error.message,[{ text: "OK" }])
            }

        }}
      >
        Now sign out!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
export default HomeScreen;