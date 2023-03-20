import {FlatList, StyleSheet, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../custom_component/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomCard from '../custom_component/custom_card/custom_card';
import {axiosInstance} from '../config/config';
import {AppRoute} from '../consts/routes';

const MainPage = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    axiosInstance
      .get('/products')
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          setProductList(response.data);
        }
        return [];
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <View style={styles.mainPage}>
      <CustomText text="Welcome back..." textStyle={styles.titleStyle} />
      <FlatList
        numColumns={2}
        data={productList}
        renderItem={({item}: any) => {
          return (
            <CustomCard
              item={item}
              onPress={() => {
                navigation.navigate(AppRoute.DetailPage, {
                  item,
                  name: item?.title,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
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

export default MainPage;
