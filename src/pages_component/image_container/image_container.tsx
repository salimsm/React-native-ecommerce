import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomImage from '../../custom_component/custom_image/custom_image';

interface imageContainerInterface {
  imageUrls: string[];
  height?:number;
  width?:number|string;
}

const ImageContainer = ({imageUrls, height=20, width='100%'}: imageContainerInterface) => {
  return (
    <View style={{height:height,width:width}}>
      <FlatList
        horizontal={true}
        data={imageUrls}
        renderItem={({item}) => {
          return <CustomImage imageUrl={item} height={height} width={height} onPress={()=>{}}/>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageContainer;
