import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  clearFavouriteProduct,
} from '../redux/slice/favourite_slice';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';
import FavouriteCard from '../component/card/favourite_card/faovurite_card';
import EmptyComponent from '../component/empty_component/empty_component';

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
        <EmptyComponent text='Nothing to show'/>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavouritePage;
