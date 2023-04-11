import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {AppColor} from '../consts/colors';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../common/custom_image/custom_image';
import TextInColumn from '../component/text_in_column/text_in_column';
import CustomIcon from '../common/custom_icon/custom_icon';
import {clearFavouriteProduct, removeFavouriteProduct} from '../redux/slice/favourite_slice';

const FavouritePage = () => {
  const favouriteList = useSelector((state: any) => state.favourite);
  const dispatch = useDispatch();
  const funClearAllFav=()=>{
    dispatch(clearFavouriteProduct());
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Saved Product</Text>
        <CustomIcon icon="undo" onPress={funClearAllFav}/>
      </View>
      {
        favouriteList.favouriteItem.length!==0?
        <FlatList
        data={favouriteList.favouriteItem}
        renderItem={({item}: {item: any}) => {
          return <FavouritePageCard item={item} dispatch={dispatch} />;
        }}
      />:
        <Text style={[styles.title,{alignSelf:'center',marginVertical:50}]}>Nothing to show</Text>

      }
      
    </View>
  );
};

const FavouritePageCard = ({item, dispatch}: any) => {
  return (
    <View style={styles.cartContainer}>
      <CustomImage imageUrl={item.imageUrl} height={60} width={60} margin={5} />
      <View>
        <Text style={styles.title}>{item.title}</Text>

        <View style={styles.subCartContainer}>
          <TextInColumn title="Price($)" value={item.price} />

          <CustomIcon
            icon={'trash-o'}
            size={22}
            onPress={() => {
              dispatch(removeFavouriteProduct(item));
            }}
            style={styles.delIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    borderBottomWidth:1,
    marginVertical:2
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
  titleStyle: {
    fontSize: 25,
    fontFamily: 'Laila-Medium',
    alignSelf: 'center',
    color: AppColor.black,
  },
  title: {fontWeight: 'bold', fontSize: 17},
  delIcon: {
    marginHorizontal: 50,
  },
});

export default FavouritePage;
