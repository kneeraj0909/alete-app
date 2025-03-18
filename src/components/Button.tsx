import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  leftIcon?: any;
  rightIcon?: any;
  iconSize?: number;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  backgroundColor,
  textColor = 'white',
  leftIcon,
  rightIcon,
  iconSize = 20,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}>
      {leftIcon && (
        <Image
          source={leftIcon}
          style={[
            styles.icon,
            {width: iconSize, height: iconSize, marginRight: 10},
          ]}
        />
      )}
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      {rightIcon && (
        <Image
          source={rightIcon}
          style={[
            styles.icon,
            {width: iconSize, height: iconSize, marginLeft: 10},
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    fontSize: 12,
    fontWeight:500,
    fontFamily: 'Inter-VariableFont_opsz,wght',
  },
  icon: {
    tintColor: 'white',
  },
});
