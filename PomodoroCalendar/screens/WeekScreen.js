import { View, Text, StyleSheet } from 'react-native';

function WeekScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>
        This is Week Screen
      </Text>
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
export default WeekScreen;