import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
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
  const [isLoading, setIsLoading] = useState(false);
  const [onPullLoading, setOnPullLoading] = useState(false);

  const [productList, setProductList] = useState<{}[]>([]);
  const [offset, setOffset] = useState(0);

  const product = useSelector((state: any) => state.cart);

  const getProductList = () => {
    console.log('get');
    
    //.get('/products')
    setIsLoading(true);
    axiosInstance
      .get(`products?offset=${offset}&limit=8`)
      .then(response => {
        if (response.status == 200) {
          //setProductList(response.data);
          setProductList([...productList, ...response.data]);
          setOffset(offset + 8);
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

  const renderEmptyList = () => {
    if (isLoading) {
      // return <ActivityIndicator size="large" color="blue" />;
      return <LoaderTextCard text="Welcome back" loader={true} />;
    } else {
      return <LoaderTextCard text="Nothing to show" />;
    }
  };
  const handleEndReached = () => {
    console.log('end reached');

    getProductList();
  };
  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator color="black" size={'large'} />
    ) : null;
  };

  const handleRefresh = () => {
    setOnPullLoading(true);
    // Perform the refresh action here, such as fetching new data
    getProductList();
    setOnPullLoading(false);
  };

  return (
    <View style={styles.mainPage}>
      <StatusBar backgroundColor={AppColor.primary} />
      <Appbar
        totalItem={product.totalItem}
        cartPage={moveToCartPage}
        searchPage={moveToSearchPage}
      />
      <Category navigation={navigation} />
      <View style={styles.listContainer}>
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
          refreshing={onPullLoading}
          onRefresh={handleRefresh}
          onEndReached={handleEndReached}
          ListFooterComponent={productList.length < 8 ? null : renderFooter}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={renderEmptyList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  listContainer: {
    flex: 1,
  },
});

export default MainPage;
