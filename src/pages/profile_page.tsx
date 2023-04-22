import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CustomText from '../common/custom_text/custom_text';
import CustomButton from '../common/custom_button/custom_button';
import {AppColor} from '../consts/colors';
import {removeUser} from '../redux/slice/user_slice';
import {storage} from '../mmkv-storage/mmkv_storage';
import {AppRoute} from '../consts/routes';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';

const imageUrl =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

const ProfilePage = ({navigation}: any) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    storage.delete('user.email');
    storage.delete('user.uid');
    dispatch(removeUser());
  };
  const goToFavouritePage = () => {
    navigation.navigate(AppRoute.FavouritePage);
  };

  return (
    <View style={styles.profilePage}>
      <View style={styles.upperHalfContainer}>
        <SecondaryAppbar title="Profile" />
      </View>
      <View style={styles.lowerHalfConatiner}>
        <Image
          source={{uri: imageUrl}}
          style={styles.profileImage}
        />
        <CustomText text={user.email} textStyle={styles.medium} />
        <CustomButton
          text="See Your Favourite"
          onPress={goToFavouritePage}
          buttonStyle={styles.watchListButton}
          buttonTextStyle={styles.watchListText}
        />
        <CustomButton text="Logout" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    backgroundColor: AppColor.background,
  },
  upperHalfContainer: {flex:1, backgroundColor: AppColor.primary},
  lowerHalfConatiner:{flex: 2, alignItems: 'center'},
  profileImage:{
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColor.primary,
    position: 'absolute',
    top: -85,
  },
  medium: {
    color: AppColor.primary,
    fontSize: 20,
    marginTop: 130,
    fontWeight: '600',
  },
  watchListButton: {
    backgroundColor: AppColor.background,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: AppColor.primary,
    shadowColor:AppColor.primary,
  },
  watchListText: {
    color: AppColor.primary,
  },
});

export default ProfilePage;
