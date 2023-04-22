import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';

interface IEmpty {
  text: string;
}
/* Nothing to show */  
        
const EmptyComponent = ({text}: IEmpty) => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  contaier: {
    borderRadius: 14,
    paddingVertical: 10,

    marginVertical: 20,
    marginHorizontal: 20,

    backgroundColor: AppColor.card,
    elevation: 8,
    shadowColor: AppColor.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
  },
  text: {alignSelf: 'center', fontSize: 18, color: AppColor.black},
});

export default EmptyComponent;
