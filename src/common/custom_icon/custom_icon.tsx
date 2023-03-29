import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../../consts/colors';

interface IconInterface {
  icon: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: {};
}

const CustomIcon:React.FC<IconInterface> = ({icon, size=17, color=AppColor.primary, onPress, style}: IconInterface) => {
  
  return (
    <TouchableOpacity style={[style,{width:size+10,height:size+10,justifyContent:'center',alignItems:'center'}]} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomIcon;
