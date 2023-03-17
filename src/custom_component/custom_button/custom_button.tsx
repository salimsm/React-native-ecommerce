import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { AppColor } from '../../consts/const';

interface buttonInterface {
  text: string;
  onPress: () => void,
  isLoading?:boolean,
}

const CustomButton = ({text, onPress ,isLoading = false}: buttonInterface) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      {isLoading && <ActivityIndicator color={AppColor.white}/>}
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: '70%',
    backgroundColor: AppColor.primary,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    color:'white',
    marginLeft:5
  },
});

export default CustomButton;
