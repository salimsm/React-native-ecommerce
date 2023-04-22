import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';

const TextInColumn = ({title, value}: any) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {color: AppColor.primary, fontSize: 15},
  price: {fontWeight: 'bold', fontSize: 17, color: AppColor.black},
});

export default TextInColumn;
