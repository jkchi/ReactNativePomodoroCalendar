import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from '@rneui/themed';

const TabBarButton = (props) => {
  const isSelected = props.accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7,
      }}
    >
      <Icon
        name={props.iconName}
        type={props.iconProvider}
        size={30}
        color={isSelected ? '#007bff' : 'gray'}
      />
      <Text style={{ color: isSelected ? '#007bff' : 'gray' }}>
        {props.label} 
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarButton;
