import {ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { AppColor } from '../../consts/colors';

interface buttonInterface {
  text: string;
  onPress: () => void,
  isLoading?:boolean,
  buttonStyle?:{},
  buttonTextStyle?:{}
}

const CustomButton = ({text, onPress ,isLoading = false,buttonStyle,buttonTextStyle}: buttonInterface) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle,buttonStyle]} onPress={onPress} >
      {isLoading && <ActivityIndicator color={AppColor.white}/>}
      <Text style={[styles.textStyle,buttonTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    width: '50%',
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
