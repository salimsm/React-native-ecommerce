import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../custom_icon/custom_icon';

interface cardInterface {
  item: {
    title: string;
    price: number;
    images: string[];
  };
  onPress: () => void;
}

const CustomCard = ({item, onPress}: cardInterface) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={onPress}>
      <Image
        source={{uri: item.images[0]}}
        style={{height: 120, width: '100%'}}
      />
      <Text style={styles.nameStyle}>{item.title}</Text>

      <View style={styles.rowContainer}>
        <Text style={styles.priceStyle}>$ {item.price}</Text>
        <CustomIcon
          icon="chevron-circle-right"
          size={17}
          color={AppColor.white}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '44%',
    backgroundColor: AppColor.primary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '3%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameStyle: {
    fontSize: 14,
    color: AppColor.white,
    marginLeft: 5,
    marginRight: 5,
    maxHeight: 18,
  },
  priceStyle: {
    fontSize: 15,
    color: AppColor.white,
    fontWeight: '700',
  },
});

export default CustomCard;
