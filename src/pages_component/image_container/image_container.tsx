import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomImage from '../../custom_component/custom_image/custom_image';
import { AppColor } from '../../consts/colors';

interface imageContainerInterface {
  imageUrls: string[];
  height?:number;
  marginHorizontal?:number;
}

const ImageContainer = ({imageUrls, height=20,marginHorizontal=0}: imageContainerInterface) => {
  return (
    <View style={[styles.box,{height:height,marginHorizontal}]}>
      <FlatList
        horizontal={true}
        data={imageUrls}
        renderItem={({item}) => {
          return <CustomImage imageUrl={item} height={height} width={height} margin={1} onPress={()=>{}}/>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  box:{
    borderColor:AppColor.primary,
    borderWidth:1,
    alignSelf:'flex-start'
  },
});

export default ImageContainer;
