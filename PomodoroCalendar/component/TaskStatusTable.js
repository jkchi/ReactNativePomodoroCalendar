import React from "react";
import { View, Text, StyleSheet, FlatList,} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useSelector } from "react-redux";
import isToday from "../utils/isToday";

const TaskTable = () => {

  const allTasks = useSelector(state => state.user.events)
  const tasks = allTasks.filter(isToday);
  
 
  const totalAllocatedTime = tasks.reduce(
    (accumulator, item) => accumulator + item.duration,
    0,
  );

  const totalFocusTime = tasks.reduce(
    (accumulator, item) => accumulator + item.focusDuration,
    0,
  );


  const renderRow = ({ item }) => {
    const { title, duration, focusDuration } = item;
    const ratio = (focusDuration / duration) * 100;
    const isOverLimit = ratio > 150;
    const isBelowThreshold = ratio < 50;

    let tintColor
    if (isOverLimit) {
      tintColor = "#ff6b6b"; 
    } else if (ratio < 50) {
      tintColor = "#ffa500"; 
    } else {
      tintColor = "#1e90ff"; 
    }

    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{title}</Text>
        <Text style={styles.cell}>{duration} min</Text>
        <Text style={styles.cell}>{focusDuration} min</Text>
        <View style={styles.cell}>
          <AnimatedCircularProgress
            size={50}
            width={5}
            fill={Math.min(ratio, 100)}
            tintColor={tintColor}
            backgroundColor="#dcdcdc"
          >
            {(fill) => (
              <Text style={[styles.progressText, isOverLimit && styles.overLimit,
                            isBelowThreshold && styles.belowThreshold
              ]}>
                {Math.round(ratio)}%
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Summary of the Day</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoBlockStyled}>
          <Text style={styles.infoValueLarge}>{totalAllocatedTime} min</Text>
          <Text style={styles.infoSubtitle}>Planned Time</Text>
        </View>
        <View style={styles.infoBlockStyled}>
          <Text style={styles.infoValueLarge}>{totalFocusTime} min</Text>
          <Text style={styles.infoSubtitle}>Working Time</Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerCell}>Task Name</Text>
        <Text style={styles.headerCell}>Plan</Text>
        <Text style={styles.headerCell}>Focus</Text>
        <Text style={styles.headerCell}>Progress</Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:10,
  },
  title:{
    marginTop:30,
    marginBottom:20,
    fontSize:25,
    fontWeight:'bold',
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoBlockStyled: {
    flex: 1,
    backgroundColor: "#e6f2ff", 
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  infoValueLarge: {
    color: "#1e90ff", 
    fontSize: 30,
    fontWeight: "bold",
  },
  infoSubtitle: {
    color: "#333", 
    fontSize: 16,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff", 
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Light gray separator line
  },
  cell: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  progressText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333", 
  },
  overLimit: {
    color: "#ff6b6b", 
  },
  belowThreshold:{
    color: "#ff6600", 
  },
});

export default TaskTable;
