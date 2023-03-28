import {
  StyleSheet,
  Text,
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
  number:number;
}

const CustomIconWithNumber:React.FC<IconInterface> = ({icon, size, color, onPress, style,number}: IconInterface) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} >
      <Icon name={icon} size={size} color={color} />
      <Text style={styles.componentStyle}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  componentStyle:{
    position:'absolute',
    left:15,backgroundColor:'green',borderRadius:30,fontSize:14,paddingHorizontal:4
  }
});

export default CustomIconWithNumber;
