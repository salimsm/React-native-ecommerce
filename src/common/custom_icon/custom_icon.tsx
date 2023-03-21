import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconInterface {
  icon: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: {};
}

const CustomIcon:React.FC<IconInterface> = ({icon, size, color, onPress, style}: IconInterface) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomIcon;
