import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface iconInterface {
  icon: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: {};
}

const CustomIcon = ({icon, size, color, onPress, style}: iconInterface) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomIcon;
