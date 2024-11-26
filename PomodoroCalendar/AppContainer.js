import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import { useSelector } from 'react-redux';

function AppContainer() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  return (
    isAuthenticated ? <MainNavigator /> : <LoginNavigator />
  );
  }
  export default AppContainer;