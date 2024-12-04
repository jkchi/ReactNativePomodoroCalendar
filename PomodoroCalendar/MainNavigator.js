import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeekScreen from './screens/WeekScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import DayTaskScreen from './screens/DayTaskScreen';
import TaskStatsScreen from './screens/TaskStatsScreen';
import { Icon } from '@rneui/themed';
import TabBarButton from './component/TabButton';
import {useDispatch } from 'react-redux';
import { toggleCalValue } from './utils/appSlice';


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
  const dispatch = useDispatch();

  return(
    <NavigationContainer independent = {true}>
    
    <Tabs.Navigator
      screenOptions={{headerShown: false}}
    >
              
    <Tabs.Screen 
      name="Calendar" 
      component={WeekScreen}
      options={{
        tabBarButton: (props) => (
          <TabBarButton
            {...props}
            label="Calendar"
            iconProvider = "font-awesome"
            iconName="calendar"
            onLongPress = {() => dispatch(toggleCalValue())}
          />
        )
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
