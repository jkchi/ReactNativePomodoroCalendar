import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
function DayScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        This is Day Screen
      </Text>

      <TouchableOpacity
        onPress={ () => {
          navigation.navigate('Week')
        }}
      >
        <Text>
         go to Week
        </Text>
        
      </TouchableOpacity>
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
export default DayScreen;