import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../../../common/custom_image/custom_image';
import CustomIcon from '../../../common/custom_icon/custom_icon';
import {removeProduct} from '../../../redux/slice/cart_slice';
import TextInColumn from '../../text_in_column/text_in_column';
import {AppColor} from '../../../consts/colors';

interface ICart {}

const CartCard = ({item, dispatch}: any) => {
  return (
    <View style={styles.cartContainer}>
      <CustomImage imageUrl={item.imageUrl} height={80} width={80} margin={5} />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.subInnerContainer}>
          <TextInColumn title="Qty" value={item.itemQty} />
          <TextInColumn title="Price" value={item.price} />
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
  cartContainer: {
    backgroundColor: AppColor.card,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 3,

    flexDirection: 'row',

    borderLeftWidth: 5,
    borderLeftColor:AppColor.primary

  },
  innerContainer: {flex: 1},
  subInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontWeight: 'bold', fontSize: 18, color: AppColor.black},
});

export default CartCard;
