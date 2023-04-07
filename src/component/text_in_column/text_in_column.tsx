import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextInColumn = ({title, value}: any) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.textBold}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  textBold: {fontWeight: 'bold', fontSize: 15},
});

export default TextInColumn;
