import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';

// interface TextInterface {
//     text:string,
//     size: number,
//     color: ColorValue,
//     weight:
// }

interface TextInterface {
  text: string;
  textStyle?: {};
  onPress?: ()=>void;
}

const CustomText = ({text, textStyle,onPress}: TextInterface) => {
  return (
  <TouchableHighlight onPress={onPress}>
  <Text style={[styles.default, textStyle]}>{text}</Text>
  </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    color: AppColor.black,
  },
});

export default CustomText;
