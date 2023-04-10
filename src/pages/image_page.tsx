import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {AppColor} from '../consts/colors';

const ImagePage = ({route}: any) => {
  const {item} = route.params;
  return (
    <View style={styles.imagePage}>
      <Image
        source={{uri: item?.images[0]}}
        style={{width: '100%', height: 180}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePage: {
    backgroundColor: AppColor.background,
    fontWeight: '700',
  },
});

export default ImagePage;
