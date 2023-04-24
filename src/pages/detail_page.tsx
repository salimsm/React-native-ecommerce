import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {addProduct, removeProduct} from '../redux/slice/cart_slice';
import {addFavouriteProduct} from '../redux/slice/favourite_slice';

import CustomText from '../common/custom_text/custom_text';
import CustomButton from '../common/custom_button/custom_button';
import ImageContainer from '../component/image_container/image_container';
import CustomIcon from '../common/custom_icon/custom_icon';
import {AppColor} from '../consts/colors';

interface IExistingItem {
  id: number;
  imageUrl: string;
  itemQty: number;
  itemTotalPrice: number;
  price: number;
  title: string;
}

const DetailPage = ({navigation, route}: any) => {
  const {item} = route.params;
  console.log(item,'item from detail page');
  const [quantityItem, setItemQuantity] = useState(1);
  const [showAddButton, setShowAddButton] = useState(true);
  const [existingItem, setExistingItem] = useState<IExistingItem | undefined>();
  const product = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect called');
    const existItem = product.cartItem.find(
      (value: any) => value.id == item.id,
    );
    setExistingItem(existItem);
    if (existingItem) {
      setItemQuantity(existingItem.itemQty);
      setShowAddButton(false);
    }
  }, [existingItem]);

  const increment = () => {
    if (quantityItem < 6) {
      setItemQuantity(quantityItem + 1);
    }
  };
  const decrement = () => {
    if (quantityItem > 1) {
      setItemQuantity(quantityItem - 1);
    }
  };

  return (
    <ScrollView style={styles.detailPage} >
      <View >
        <Image
          source={{uri: item?.images[0]}}
          style={{width: '100%', height: 180}}
        />

        <View style={{alignItems: 'center'}}>
          <CustomText
            text={`$ ${item.price}`}
            textStyle={styles.mediumTextStyle}
          />
          <CustomText
            text={`Category: ${item?.category?.name}`}
            textStyle={styles.mediumTextStyle}
          />

          <ImageContainer
            imageUrls={item?.images}
            height={60}
            marginHorizontal={10}
          />

          <CustomText
            text={item.description}
            textStyle={styles.smallTextStyle}
          />
          <QunatitySelectComponent
            quantity={quantityItem}
            increment={increment}
            decrement={decrement}
          />
          {showAddButton ? (
            <CustomButton
              text="Add To Cart"
              onPress={() => {
                dispatch(
                  addProduct({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    itemQty: quantityItem,
                    itemTotalPrice: item.price * quantityItem,
                    imageUrl: item.category.image,
                  }),
                );
                setShowAddButton(false);
                navigation.goBack();
              }}
            />
          ) : (
            <CustomButton
              text="Reset"
              onPress={() => {                
                if (existingItem) {
                  dispatch(removeProduct(existingItem));
                  setShowAddButton(true);
                  setExistingItem(undefined);
                } else {
                  Toast.show({
                    type: 'error',
                    text1: 'Something went wrong',
                    position:'bottom'
                  });                
                }
              }}
            />
          )}

          <CustomButton
            text="Save To Wishlist"
            onPress={() => {
              dispatch(addFavouriteProduct(item));
              Toast.show({
                type: 'success',
                text1: 'Saved',
                position: 'bottom',
              });
            }}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const QunatitySelectComponent = ({quantity, increment, decrement}: any) => {
  return (
    <View style={[styles.quantitySelectStyle]}>
      <CustomIcon
        icon="minus"
        onPress={decrement}
        size={16}
        color={AppColor.white}
        style={styles.quantityIconStyle}
      />
      <Text>{quantity}</Text>
      <CustomIcon
        icon="plus"
        onPress={increment}
        size={16}
        color={AppColor.white}
        style={styles.quantityIconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailPage: {
    backgroundColor: AppColor.background,
    fontWeight: '700',
  },
  mediumTextStyle: {
    marginVertical: 5,
    fontWeight: '700',
  },
  smallTextStyle: {
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 8,
    color: AppColor.primary,
  },
  buttonStyle: {
    marginVertical: 10,
    backgroundColor: AppColor.background,
    borderWidth: 1,
    borderColor: AppColor.secondary,
  },
  buttonTextStyle: {
    color: AppColor.primary,
  },
  quantitySelectStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'space-evenly',
    margin: 8,
  },
  quantityIconStyle: {
    borderRadius: 8,
    backgroundColor: AppColor.primary,
  },
});

export default DetailPage;
