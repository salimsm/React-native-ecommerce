import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';

interface ICategory {
  title?: string;
  icon?: string;
  color?: string;
  size?: number;
}

const Category = ({title, icon, color = AppColor.black, size}: ICategory) => {
  return (
    <View style={{height:35}}>
    <ScrollView  horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
      <Chip text="Men" />
    
    {/* </View> */}
     </ScrollView>
     </View>
  );
};

const Chip = ({text}: {text: string}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        
        marginHorizontal:4,
        marginVertical:2
      }}>
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
});

export default Category;
