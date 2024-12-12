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
        size={25}
        color={isSelected ? '#007bff' : 'gray'}
      />
      <Text style={{ fontFamily:'San Francisco', 
                     color: isSelected ? '#007bff' : 'gray', 
                     fontSize:10,
                     marginTop:5
                     }}>
        {props.label} 
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarButton;
