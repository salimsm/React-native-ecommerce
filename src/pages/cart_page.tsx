import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';

import CustomIcon from '../common/custom_icon/custom_icon';
import CustomButton from '../common/custom_button/custom_button';
import CustomImage from '../common/custom_image/custom_image';
import TextInColumn from '../component/text_in_column/text_in_column';
import {AppColor} from '../consts/colors';
import {clearProduct, removeProduct} from '../redux/slice/cart_slice';
import {getDate, getTime} from '../helper/helper';
import Toast from 'react-native-toast-message';


const CartPage = () => {
  const product = useSelector((state: any) => state.cart);
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
      console.log('no item');
      Toast.show({
        type: 'error',
        text1: 'Cart Empty',
        text2: 'No item in cart',
        position:'bottom'

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
      <FlatList
        data={product.cartItem}
        renderItem={({item}: any) => (
          <CartPageCard item={item} dispatch={dispatch} />
        )}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.totalStyle}>
          Total Price: ${product.totalPrice}
        </Text>
        <CustomButton text="Checkout" onPress={storeCheckout} />
      </View>
    </View>
  );
};

const CartPageCard = ({item, dispatch}: any) => {
  return (
    <View style={styles.cartContainer}>
        <CustomImage imageUrl={item.imageUrl} height={60} width={60} margin={5}/>
<View>
        <Text style={styles.title}>{item.title}</Text>
      
      <View style={styles.subCartContainer}>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    flex: 1,
  },
  cartContainer: {
    backgroundColor: AppColor.card,
    marginHorizontal: 1,
    marginVertical: 2,

    flexDirection:'row',

    padding: 3,
    alignItems: 'center',

    borderLeftWidth: 4,
  },
  subCartContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 2,
  },
  totalStyle: {fontWeight: 'bold', fontSize: 17},
  title: {fontWeight: 'bold', fontSize: 17},
  bottomContainer: {alignItems: 'center', marginVertical: 4},
});

export default CartPage;
