import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {AppColor} from '../consts/colors';

const ImagePage = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item?.images[0]}}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    fontWeight: '700',
  },
  image:{width: '100%', height: 180}
});

export default ImagePage;
