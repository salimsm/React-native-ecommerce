import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';

import CustomButton from '../common/custom_button/custom_button';
import {AppColor} from '../consts/colors';
import {clearProduct} from '../redux/slice/cart_slice';
import {getDate, getTime} from '../helper/helper';
import Toast from 'react-native-toast-message';
import EmptyComponent from '../component/loader_text_card/loader_text_card';
import CartCard from '../component/card/cart_card/cart_card';

const CartPage = () => {
  const product = useSelector((state: any) => state.cart);

  console.log(product.cartItem.length,'length from cartpage');
  

  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const storeCheckout = async () => {
    let productInfo = '';
    product.cartItem.forEach(
      (item: {
        id: number;
        itemQty: number;
        itemTotalPrice: number;
        price: number;
        title: string;
      }) => {
        productInfo +=
          item.title +
          '\n' +
          'qty:' +
          item.itemQty +
          '* unit-price:' +
          item.price +
          '\n';
      },
    );

    if (product.totalItem == 0) {
      Toast.show({
        type: 'error',
        text1: 'Cart Empty',
        text2: 'No item in cart',
        position: 'bottom',
      });
    } else {
      const d = getDate();
      const t = getTime();
      const purchaseId = d + t;
      database()
        .ref(`/users/${user.uid}/${purchaseId}`)
        .set({
          product: productInfo,
          totalPrice: product.totalPrice,
          totalItem: product.totalItem,
          date: d,
          time: t,
        })
        .then(() => console.log('Data set.'));
      dispatch(clearProduct());
    }
  };

  return (
    <View style={styles.container}>

      {(product.cartItem.length !== 0) ?( <FlatList
        data={product.cartItem}
        renderItem={({item}: any) => (
          <CartCard item={item} dispatch={dispatch} />
        )}
      />):<EmptyComponent text='Nothing added to cart'/>}

{(product.cartItem.length !== 0) && (<View style={styles.bottomContainer}>
        <Text style={styles.totalStyle}>
          Total Price: ${product.totalPrice}
        </Text>
        <CustomButton text="Checkout" onPress={storeCheckout} />
      </View>
    )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    flex: 1,
  },
  totalStyle: {fontWeight: 'bold', fontSize: 17},
  title: {fontWeight: 'bold', fontSize: 17},
  bottomContainer: {alignItems: 'center', marginVertical: 4},
});

export default CartPage;
