import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../common/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomCard from '../common/custom_card/custom_card';
import {axiosInstance} from '../config/config';
import {AppRoute} from '../consts/routes';
import Appbar from '../component/app _bar/app_bar';
import { useSelector } from 'react-redux';

const MainPage = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const product = useSelector((state: any) => state.cart);
  
  const getProductList = () => {
    axiosInstance
      .get('/products')
      .then(response => {
        if (response.status == 200) {
          setProductList(response.data);
          setIsLoading(false);
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

  const moveToCartPage = () =>{
    navigation.navigate('CartPage');
  }

  return (
    <View style={styles.mainPage}>
      <Appbar totalItem={product.totalItem} cartPage={moveToCartPage}/>
      <View style={{flex:1}}>
      <CustomText text="Welcome back..." textStyle={styles.titleStyle} />
      {isLoading?<ActivityIndicator/>: <FlatList
        numColumns={2}
        data={productList}
        renderItem={({item}: any) => {
          return (
            <CustomCard
              item={item}
              onPress={() => navigation.navigate(AppRoute.DetailPage, {
                  item,
                  name: item?.title,
                })
              }
            />
          );
        }}
      />}
      </View>
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
    fontSize: 12,
  },
});

export default MainPage;
