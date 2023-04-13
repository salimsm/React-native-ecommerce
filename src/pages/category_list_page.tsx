import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomCard from '../common/custom_card/custom_card';
import CustomText from '../common/custom_text/custom_text';
import {AppRoute} from '../consts/routes';
import {axiosInstance} from '../config/config';
import {AppColor} from '../consts/colors';
import CustomIcon from '../common/custom_icon/custom_icon';

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
      <View style={styles.appbar}>
        <CustomIcon icon="long-arrow-left" onPress={goToProfilePage} />
        <CustomText
          text={value}
          textStyle={[styles.textStyle, styles.appBarText]}
        />
        <Text></Text>
      </View>
      <View style={{flex: 1}}>
        {isLoading ? (
          <>
            <CustomText text="Please wait..." textStyle={styles.textStyle} />

            <ActivityIndicator />
          </>
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

  textStyle: {
    color: AppColor.primary,
    fontSize: 17,
    fontFamily: 'Laila-Medium',
    alignSelf: 'center',
    marginTop: 4,
  },
  appBarText: {
    fontSize: 25,
    marginVertical: 2,
  },
  appbar:{flexDirection:'row',width: '100%',    borderBottomWidth: 1,
  alignItems:'center',
  justifyContent:'space-between',
  paddingHorizontal: 8,

}
});

export default CategoryListPage;
