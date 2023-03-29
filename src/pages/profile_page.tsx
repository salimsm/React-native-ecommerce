import {StyleSheet, View} from 'react-native';

import React, {useState} from 'react';
import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomInputText from '../common/custom_input_text/custom_input_text';

const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const register = () => {
    setIsLoading(true);
  };

  return (
    <View style={styles.profilePage}>
      <CustomText text="Profile" textStyle={styles.titleStyle} />

      <CustomInputText
        placeholder="User"
        onChangeText={value => {
          console.log(value);
        }}
        marginVertical={10}
      />

      <CustomInputText
        placeholder="Password"
        onChangeText={value => {
          console.log(value);
        }}
        marginVertical={10}
        secureTextEntry={showPassword}
        trailingIcon={true}
        iconPressed={() => {
          setShowPassword(!showPassword);
        }}
      />
      <CustomButton text="Register" onPress={register} isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    backgroundColor: AppColor.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleStyle: {
    color: AppColor.primary,
    fontSize: 20,
  },
});

export default ProfilePage;
