import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeekScreen from './screens/WeekScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import TaskStatsScreen from './screens/TaskStatsScreen';
import TabBarButton from './component/TabButton';
import {useDispatch } from 'react-redux';
import { toggleCalValue, toggleDaySummary } from './utils/appSlice';



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
        tabBarButton: (props) => (
          <TabBarButton
            {...props}
            label="Pomodoro"
            iconProvider = "mui"
            iconName="timer"
          />
        )
      }}
      />
    
    <Tabs.Screen 
      name="TaskStats" 
      component={TaskStatsScreen}

      options={{
        tabBarButton: (props) => (
          <TabBarButton
            {...props}
            label="TaskStats"
            iconProvider = "mui"
            iconName="analytics"
            onLongPress = {() => dispatch(toggleDaySummary())}
          />
        )
      }}      
      />

      </Tabs.Navigator>
    </NavigationContainer>
  )
}  

export default MainNavigator;
