import {StyleSheet, Text, View} from 'react-native';

import React, {useState} from 'react';
import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomInputText from '../common/custom_input_text/custom_input_text';
import { AppRoute } from '../consts/routes';

const RegisterPage = ({navigation}:any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const register = () => {
    setIsLoading(true);
  };

  const goToLoginPage = () => {
    navigation.navigate(AppRoute.LoginPage);
  };
  return (
    <View style={styles.registerPage}>
      <CustomText text="Register" textStyle={styles.titleStyle} />

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
      <View style={{flexDirection: 'row'}}>
        <Text>Already have an account, </Text>
        <CustomText text="Sign in" onPress={goToLoginPage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerPage: {
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

export default RegisterPage;
