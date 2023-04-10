import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CustomText from '../common/custom_text/custom_text';
import CustomButton from '../common/custom_button/custom_button';
import {AppColor} from '../consts/colors';
import {removeUser} from '../redux/slice/user_slice';
const imageUrl =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

const ProfilePage = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <View style={styles.profilePage}>
      <View style={{flex: 1, backgroundColor: AppColor.primary}}>
        <CustomText
          text="Profile"
          // textStyle={styles.titleStyle}
        />
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image
          source={{uri: imageUrl}}
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: AppColor.primary,
            position: 'absolute',
            top: -100,
          }}
        />
        <CustomText text={user.email} textStyle={styles.medium} />
        <CustomText text="Profile" textStyle={styles.small} />
        <CustomText text="Profile" textStyle={styles.small} />
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
  medium: {
    color: AppColor.primary,
    fontSize: 20,
    marginTop: 130,
    fontWeight: '600',
  },
  small: {
    color: AppColor.primary,
    fontSize: 17,
  },
});

export default ProfilePage;
