import {FlatList, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../custom_component/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomCard from '../custom_component/custom_card/custom_card';
import { axiosInstance } from '../config/config';

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  return (
    <View style={styles.detailPage}>
      <CustomText text="Welcome back..." textStyle={styles.titleStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailPage: {
    flex: 1,
    backgroundColor: AppColor.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleStyle: {
    color: AppColor.primary,
    fontSize: 20,
  },
});

export default DetailPage;
