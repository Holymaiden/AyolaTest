import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from 'constants/colors';

type ButtonProps = {
  title: string;
  color?: string;
  filled?: boolean;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const filledBgColor = props.color || COLORS.PRIMARY;
  const outlinedColor = COLORS.WHITE;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.WHITE : COLORS.PRIMARY;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{backgroundColor: bgColor},
        ...props.style,
      }}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={(styles.text, {color: textColor})}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
export default Button;
