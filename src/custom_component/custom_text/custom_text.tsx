import {ColorValue, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/const';

// interface TextInterface {
//     text:string,
//     size: number,
//     color: ColorValue,
//     weight:
// }

interface TextInterface {
  text: string;
  textStyle?: {};
}

const CustomText = ({text, textStyle}: TextInterface) => {
  return <Text style={[styles.default, textStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: AppColor.black,
  },
});

export default CustomText;
