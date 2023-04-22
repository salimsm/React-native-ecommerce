import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../config/config';

import CustomCard from '../common/custom_card/custom_card';
import Appbar from '../component/app _bar/app_bar';
import Category from '../component/category/category';
import {AppColor} from '../consts/colors';
import {AppRoute} from '../consts/routes';
import LoaderTextCard from '../component/loader_text_card/loader_text_card';

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

  const moveToCartPage = () => {
    navigation.navigate('CartPage');
  };

  const moveToSearchPage = () => {
    navigation.navigate('SearchPage');
  };
  return (
    <View style={styles.mainPage}>
      <StatusBar backgroundColor={AppColor.primary}/>
      <Appbar
        totalItem={product.totalItem}
        cartPage={moveToCartPage}
        searchPage={moveToSearchPage}
      />
      <Category navigation={navigation}/>
      <View style={{flex: 1}}>
        {isLoading ? (
          <LoaderTextCard text='Welcome back' loader={true}/>
        ) : (
          <FlatList
            numColumns={2}
            data={productList}
            renderItem={({item}: any) => {
              return (
                <CustomCard
                  item={item}
                  onPress={() =>
                    navigation.navigate(AppRoute.DetailPage, {
                      item,
                      name: item?.title,
                    })
                  }
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: AppColor.background,
    
  },

});

export default MainPage;
