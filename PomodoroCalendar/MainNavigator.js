import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DayScreen from './screens/DayScreen';
import WeekScreen from './screens/WeekScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import DayTaskScreen from './screens/DayTaskScreen';
import TaskStatsScreen from './screens/TaskStatsScreen';
import { Icon } from '@rneui/themed';
import HomeScreen from './screens/HomeScreen';

const CalendarContainer = () => {
    const Stack = createNativeStackNavigator();
  
    return (
          <Stack.Navigator initialRouteName='Day' 
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name='Day' component={DayScreen}/>
            <Stack.Screen name='Week' component={WeekScreen}/>
          </Stack.Navigator>
    );
}

const StatsContainer = () => {
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='DayTask' 
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name='DayTask' component={DayTaskScreen}/>
          <Stack.Screen name='TaskStats' component={TaskStatsScreen}/>
        </Stack.Navigator>
  );
}



const MainNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return(
      <NavigationContainer independent = {true}>
      
      <Tabs.Navigator
        screenOptions={{headerShown: false}}
      >
        
      <Tabs.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
                <Icon 
                name="home"
                type="mui"
                color={color}
                size={size}
              />
            );
          }
        }}/>
      

        <Tabs.Screen 
          name="Calendar" 
          component={CalendarContainer}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon 
                  name="calendar"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            }
          }}
        />

        <Tabs.Screen 
          name="Pomodoro" 
          component={PomodoroScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                  <Icon 
                  name="timer"
                  type="mui"
                  color={color}
                  size={size}
                />
              );
            }
          }}/>
        
        <Tabs.Screen 
          name="Analytics" 
          component={StatsContainer}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                  <Icon 
                  name="analytics"
                  type="mui"
                  color={color}
                  size={size}
                />
              );
            }
          }}/>

      </Tabs.Navigator>
    </NavigationContainer>
  )
}  

export default MainNavigator;
