import {StyleSheet, View} from 'react-native';
import React from 'react';

const RowWrapper = ({children}: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'green'},
});

export default RowWrapper;
