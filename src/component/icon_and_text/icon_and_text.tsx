import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IIconAndText {
  title: string;
  icon: string;
  color?: string;
  size?: number;
}

const IconAndText = ({
  title,
  icon,
  color = AppColor.black,
  size,
}: IIconAndText) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} color={color} size={size} />
      <Text style={styles.textBold}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', flexDirection: 'row'},
  textBold: {fontWeight: 'bold', marginLeft: 8},
});

export default IconAndText;
