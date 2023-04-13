import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CategoryListPage from '../../pages/category_list_page';
import { useNavigation } from '@react-navigation/native';

const Category = ({navigation}:any) => {
  const goNextPage =(value:string)=>{
    console.log(value, 'Category');
    navigation.navigate("CategoryListPage",{value:value});
  }
  return (
    <View style={{height: 35}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Chip text="Electronics" onPress={goNextPage}/>
        <Chip text="Shoes" onPress={goNextPage}/>
        <Chip text="Furniture" onPress={goNextPage}/>
        <Chip text="Ropa chida" onPress={goNextPage}/>
        <Chip text="Others" onPress={goNextPage}/>
      </ScrollView>
    </View>
  );
};

interface IChip {
  text: string;
  onPress: (value:string) => void;
}

const Chip = ({text, onPress}: IChip) => {
  return (
    <TouchableOpacity onPress={()=>onPress(text)} style={styles.chipStyle}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  chipStyle: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,

    marginHorizontal: 4,
    marginVertical: 2,
  },
});

export default Category;
