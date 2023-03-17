import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { AppColor } from '../../consts/const';

interface inputTextInterface {
  placeholder: string;
  onChangeText: (value:string) => void,
  value? : string,
  marginVertical?: number,
  marginHorizontal?:number,
}

const CustomInputText = ({placeholder,onChangeText,value,marginVertical,marginHorizontal}: inputTextInterface) => {
  console.log(marginVertical);
  
  return (
    <TextInput style={[styles.inputTextStyle,{marginVertical:marginVertical,marginHorizontal:marginHorizontal}]}
        placeholder = {placeholder}
        onChangeText={onChangeText}
        value ={value}
      />
  );
};

const styles = StyleSheet.create({
  inputTextStyle: {
    width:'70%',
    borderColor:AppColor.black,
    borderWidth:1,
    borderRadius:5,
    paddingLeft:10,
    justifyContent: 'center',
  },
});

export default CustomInputText;
