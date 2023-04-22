import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import RowWrapper from '../wrapper/row_wrapper/row_wrapper';
import TextInColumn from '../text_in_column/text_in_column';
import CustomIcon from '../../common/custom_icon/custom_icon';
import CustomImage from '../../common/custom_image/custom_image';
import {removeFavouriteProduct} from '../../redux/slice/favourite_slice';

interface IFavourite {}

const FavouriteCard = ({item, dispatch}: any) => {
  console.log(item.imageUrl);

  return (
    <View style={styles.cardContainer}>
      <CustomImage
        imageUrl={item?.images[0]}
        height={80}
        width={80}
        margin={5}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <TextInColumn title="Price:" value={item.price} />
      </View>
      <CustomIcon
        icon={'trash-o'}
        size={22}
        onPress={() => {
          dispatch(removeFavouriteProduct(item));
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  // card style
  cardContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 3,

    backgroundColor: AppColor.card,

    flexDirection: 'row',
    alignItems: 'center',

    borderLeftWidth: 5,
  },
  innerContainer:{flex:1},
  textBold: {fontWeight: 'bold', marginLeft: 8},
  title: {fontWeight: 'bold', fontSize: 20,color:AppColor.black},
});

export default FavouriteCard;
