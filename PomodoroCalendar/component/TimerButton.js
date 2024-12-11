import { TouchableOpacity, } from 'react-native';
import { Icon } from '@rneui/themed';

const TimerButton = (props) => {

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}
      disabled = {props.isDisabled}
    >
      <Icon
        name={props.iconName}
        type={props.iconProvider}
        size={60}
        color={props.isDisabled ? 'grey' : '#007bff'}
      />
    </TouchableOpacity>
  );
};

export default TimerButton;
