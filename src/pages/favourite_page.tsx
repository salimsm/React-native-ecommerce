import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CustomImage from '../common/custom_image/custom_image';
import TextInColumn from '../component/text_in_column/text_in_column';
import CustomIcon from '../common/custom_icon/custom_icon';
import {AppColor} from '../consts/colors';
import {
  clearFavouriteProduct,
  removeFavouriteProduct,
} from '../redux/slice/favourite_slice';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';
import FavouriteCard from '../component/favourite_card/faovurite_card';

const FavouritePage = ({navigation}: any) => {
  const favouriteList = useSelector((state: any) => state.favourite);
  const dispatch = useDispatch();
  const funClearAllFav = () => {
    dispatch(clearFavouriteProduct());
  };
  const goToProfilePage = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <SecondaryAppbar
        title="Saved Product"
        leadingIcon="long-arrow-left"
        leadingIconPressed={goToProfilePage}
        trailingIcon="undo"
        trailingIconPressed={funClearAllFav}
      />
      {favouriteList.favouriteItem.length !== 0 ? (
        <FlatList
          data={favouriteList.favouriteItem}
          renderItem={({item}: {item: any}) => {
            return <FavouriteCard item={item} dispatch={dispatch} />;
          }}
        />
      ) : (
        <Text style={[styles.title, {alignSelf: 'center', marginVertical: 50}]}>
          Nothing to show
        </Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // card style
  cartContainer: {
    backgroundColor: AppColor.card,
    marginHorizontal: 1,
    marginVertical: 2,

    flexDirection: 'row',

    padding: 3,
    alignItems: 'center',

    borderLeftWidth: 4,
  },
  subCartContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 2,
  },
  textBold: {fontWeight: 'bold', marginLeft: 8},
  title: {fontWeight: 'bold', fontSize: 17},
  delIcon: {
    marginHorizontal: 50,
  },
});

export default FavouritePage;
