import {FlatList, StyleSheet, View} from 'react-native';

import React, {useState} from 'react';
import {AppColor} from '../consts/colors';
import CustomCard from '../common/custom_card/custom_card';
import {axiosInstance} from '../config/config';
import {AppRoute} from '../consts/routes';
import InputTextAppbar from '../component/app _bar/appbar_with_textInput';
import LoaderTextCard from '../component/loader_text_card/loader_text_card';

const SearchPage = ({navigation}: any) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getSearchedProductList = () => {
    axiosInstance
      .get(`/products/?title=${searchText}`)
      .then(response => {
        if (response.status == 200) {
          setProductList(response.data);
          // setIsLoading(false);
        }
        return [];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.searchPage}>
      <InputTextAppbar
        placeholder="Search"
        onChangeText={value => {
          setSearchText(value);
          getSearchedProductList();
        }}
        leadingIcon="long-arrow-left"
        leadingIconPressed={goBack}
      />
      <View style={{flex: 1}}>
        {/* {isLoading ? (
          <CustomText text="Nothing to show..." textStyle={styles.titleStyle} />
        ) : ( */}
        <FlatList
          numColumns={2}
          ListEmptyComponent={
            // isLoading ? (
            //   <LoaderTextCard text="Please wait" loader={true} />
            // ) : (
            <LoaderTextCard text="Nothing to show" />
            // )
          }
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
        {/* )} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchPage: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
});

export default SearchPage;
