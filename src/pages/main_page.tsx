import {FlatList, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../custom_component/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomCard from '../custom_component/custom_card/custom_card';
import { axiosInstance } from '../config/config';
import { AppRoute } from '../consts/routes';

const MainPage = ({navigation}:any) => {
  // const [user, setUser] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);


  const list = [
    {name: 'x-Phone', price: 500, img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name: 'x-Phone', price: 500, img: 'https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
    {name: 'x-Phone', price: 500, img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {name: 'x-Phone', price: 500, img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
    {name: 'x-Phone', price: 500, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
  ];

  const getProductList = () => {
    axiosInstance.get('/products').then((response)=>{
      console.log(response);
      if(response.status==200){
        setProductList(response.data);
      }
      return [];      
    }).catch((error)=>{
      console.log(error);
    });
  };

  useEffect(() => {
      getProductList()
  }, [])
  

  return (
    <View style={styles.mainPage}>
      <CustomText text="Welcome back..." textStyle={styles.titleStyle} />
      <FlatList
        numColumns={2}
        data={productList}
        renderItem={({item}:any) => {
          return <CustomCard item={item} onPress={()=>{
            navigation.navigate(AppRoute.DetailPage,
              {item,name:item?.title}
              );
          }}/>
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
