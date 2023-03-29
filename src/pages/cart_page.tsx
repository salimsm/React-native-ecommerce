import {FlatList, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {AppColor} from '../consts/colors';
import { useDispatch, useSelector } from 'react-redux';
import CustomIcon from '../common/custom_icon/custom_icon';
import { removeProduct } from '../redux/slice/cart_slice';
import CustomButton from '../common/custom_button/custom_button';

const CartPage = () => {
  const product = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  
  
  return (
    <View style={styles.cartPage}>
      <View style={{flex:1}}>        
      <FlatList
        data={product.cartItem}
        renderItem={({item}: any) => {
          return (
            <View style={{backgroundColor:AppColor.tertiary,margin:1,padding:3,alignItems:'center'}}>
              <Text style={styles.textBold}>{item.title}</Text>
              <View style={{flexDirection:'row',width:'70%',justifyContent:'space-evenly',alignItems:'center',alignSelf:'center',marginVertical:2}}>

              <TextInColumn title='Qty' value={item.itemQty}/>
              <TextInColumn title='Price($)' value={item.price}/>
              <TextInColumn title='Total' value={item.itemTotalPrice}/>
              <CustomIcon icon={'trash-o'} size={22} onPress={()=>{dispatch(removeProduct(item))}}/>
              </View>
      
            </View>
            );}}/>
      </View>
      <View style={{alignItems:'center' ,marginVertical:4 }}>
            <Text style={styles.textBold}>Total Price: ${product.totalPrice}</Text>
            <CustomButton text='Checkout' onPress={()=>{}}/>
            </View>
    </View>
    );
}

const TextInColumn=({title,value}:any)=> {
  return (
    <View style={{alignItems:'center'}}>
      <Text >{title}</Text>
      <Text style={styles.textBold} >{value}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  cartPage: {
    backgroundColor: AppColor.background,
    flex:1
  },
  textBold:{fontWeight:'bold'}
});

export default CartPage;
