import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { AppColor } from '../../consts/colors';

interface buttonInterface {
  text: string;
  onPress: () => void,
  isLoading:boolean,
}

const CustomButton = ({text, onPress ,isLoading}: buttonInterface) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: 200,
    backgroundColor: AppColor.primary,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color:'white'
  },
});

export default CustomButton;
