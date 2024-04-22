import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  labelStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({label, labelStyle, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
