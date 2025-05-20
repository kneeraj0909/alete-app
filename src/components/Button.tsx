import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  leftIcon?: React.ReactNode; 
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconContainerStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  backgroundColor,
  textColor = 'white',
  leftIcon,
  rightIcon,
  style,
  textStyle,
  iconContainerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {leftIcon && <View style={[styles.iconContainer, iconContainerStyle]}>{leftIcon}</View>}
      <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
      {rightIcon && <View style={[styles.iconContainer, iconContainerStyle]}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-VariableFont_opsz,wght',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});
