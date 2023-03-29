import {
  StyleSheet,
  Text,
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
  number:number;
}

const CustomIconWithNumber:React.FC<IconInterface> = ({icon, size=17, color=AppColor.primary, onPress, style,number}: IconInterface) => {
  return (
    <TouchableOpacity style={[style,{width:size+10,height:size+10,justifyContent:'center',alignItems:'center'}]} onPress={onPress} >
      <Icon name={icon} size={size} color={color} />
      <Text style={styles.componentStyle}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  componentStyle:{
    position:'absolute',
    bottom:17,
    color:AppColor.white,
    left:20,backgroundColor:AppColor.primary,borderRadius:30,fontSize:14,paddingHorizontal:4
  }
});

export default CustomIconWithNumber;
