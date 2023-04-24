import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCard from '../common/custom_card/custom_card';
import {AppRoute} from '../consts/routes';
import {axiosInstance} from '../config/config';
import {AppColor} from '../consts/colors';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';
import LoaderTextCard from '../component/loader_text_card/loader_text_card';

const CategoryListPage = ({route, navigation}: any) => {
  const {value} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  console.log(value, 'categryolistpage');

  const getId = (): number => {
    switch (value) {
      case 'ropa chida':
        return 1;
      case 'Electronics':
        return 2;
      case 'Furniture':
        return 3;
      case 'Shoes':
        return 4;
      case 'Others':
        return 5;
      default:
        return 1;
    }
  };
  const getProductList = () => {
    const id = getId();
    console.log(id);

    axiosInstance
      .get(`categories/${id}/products`)
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

  const goToProfilePage = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SecondaryAppbar
        title={value}
        leadingIcon="long-arrow-left"
        leadingIconPressed={goToProfilePage}
      />
      <View style={{flex: 1}}>
        {isLoading ? (
          <LoaderTextCard text="Please wait" loader={true} />
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
  container: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
});

export default CategoryListPage;
