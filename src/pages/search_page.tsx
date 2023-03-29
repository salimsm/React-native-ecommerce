import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../common/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomCard from '../common/custom_card/custom_card';
import {axiosInstance} from '../config/config';
import {AppRoute} from '../consts/routes';
import CustomInputText from '../common/custom_input_text/custom_input_text';

const SearchPage = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [searchText, setSearchText] = useState('');

  //  const product = useSelector((state: any) => state.cart);

  const getSearchedProductList = () => {
    axiosInstance
      .get(`/products/?title=${searchText}`)
      .then(response => {
        if (response.status == 200) {
          console.log(response.data);
          
          setProductList(response.data);
          setIsLoading(false);
        }
        return [];
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.searchPage}>
      <CustomInputText placeholder='Search' marginVertical={4} onChangeText={value => {
          setSearchText(value);
          getSearchedProductList();
        }
        }/>
      <View style={{flex: 1}}>
        {isLoading ? (
          <CustomText text="Nothing to show..." textStyle={styles.titleStyle} />
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
  searchPage: {
    flex: 1,
    backgroundColor: AppColor.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  titleStyle: {
    color: AppColor.primary,
    fontSize: 17,marginVertical:20
  },
});

export default SearchPage;
