import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

import {AppColor} from '../consts/colors';
import {useDispatch, useSelector} from 'react-redux';
import CustomIcon from '../common/custom_icon/custom_icon';
import {clearProduct, removeProduct} from '../redux/slice/cart_slice';
import CustomButton from '../common/custom_button/custom_button';

import {getDate, getTime} from '../helper/helper';

const CartPage = () => {
  const product = useSelector((state: any) => state.cart);
  const user = useSelector((state: any) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  const storeCheckout = async () => {
  
    let productInfo = ''; 
    product.cartItem.forEach((item:{"id": number, "itemQty": number, "itemTotalPrice": number, "price": number, "title":string})=>{
      productInfo += item.title+'\n'+'qty:'+item.itemQty +'* unit-price:' + item.price+'\n';    
    });
   
   
    if (product.totalItem == 0) {
      console.log('no item');
    } else {
      const d = getDate();
      const t = getTime();
      const purchaseId =  d + t ;
      database()
        .ref(`/users/${user.uid}/${purchaseId}`)
        .set({
          product:productInfo,
          totalPrice: product.totalPrice,
          totalItem:product.totalItem,
          date: d, 
          time: t,
        })
        .then(() => console.log('Data set.'));
        dispatch(clearProduct());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={product.cartItem}
          renderItem={({item}: any) => {
            return (
              <View
                style={{
                  backgroundColor: AppColor.tertiary,
                  margin: 1,
                  padding: 3,
                  alignItems: 'center',
                }}>
                <Text style={styles.textBold}>{item.title}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '70%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginVertical: 2,
                  }}>
                  <TextInColumn title="Qty" value={item.itemQty} />
                  <TextInColumn title="Price($)" value={item.price} />
                  <TextInColumn title="Total" value={item.itemTotalPrice} />
                  <CustomIcon
                    icon={'trash-o'}
                    size={22}
                    onPress={() => {
                      dispatch(removeProduct(item));
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      
      <View style={{alignItems: 'center', marginVertical: 4}}>
        <Text style={styles.textBold}>Total Price: ${product.totalPrice}</Text>
        <CustomButton text="Checkout" onPress={storeCheckout} />
      </View>
    </View>
  );
};


const TextInColumn = ({title, value}: any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>{title}</Text>
      <Text style={styles.textBold}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    flex: 1,
  },
  listContainer:{
    flex: 1,
  },
  textBold: {fontWeight: 'bold'},
});

export default CartPage;
