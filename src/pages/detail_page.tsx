import {Image, StyleSheet, View} from 'react-native';

import React, {useEffect, useState} from 'react';
import CustomText from '../custom_component/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomButton from '../custom_component/custom_button/custom_button';
import ImageContainer from '../pages_component/image_container/image_container';

const DetailPage = ({route}: any) => {
  const {item} = route.params;

  return (
    <View style={styles.detailPage}>
      <Image
        source={{uri: item?.images[0]}}
        style={{width: '100%', height: 180}}
      />

      <View style={{ alignItems: 'center'}}>
        <CustomText
          text={`$ ${item.price}`}
          textStyle={styles.mediumTextStyle}
        />
        <CustomText
          text={`Category: ${item?.category?.name}`}
          textStyle={styles.mediumTextStyle}
        />

        <ImageContainer imageUrls={item?.images} height={40}/>

        <CustomText text={item.description} textStyle={styles.smallTextStyle} />
        <CustomButton text='Add To Cart' onPress={()=>{}}/>
        <CustomButton text='Save To Wishlist' onPress={()=>{}} buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}/>
    
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  detailPage: {
    backgroundColor: AppColor.background,
    fontWeight:'700'
  },
  mediumTextStyle: {
    marginVertical: 5,
    fontWeight:'700'
  },
  smallTextStyle: {
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize:12,
    marginVertical: 8,
    color:AppColor.primary
  },
  buttonStyle:{
    marginVertical:10,
    backgroundColor:AppColor.background,
    borderWidth:1,
    borderColor:AppColor.secondary
  },
  buttonTextStyle:{
    color:AppColor.primary
  }
});

export default DetailPage;
