import {StyleSheet, Text, View} from 'react-native';

import React, {useState} from 'react';
import CustomButton from '../custom_component/custom_button/custom_button';
import CustomText from '../custom_component/custom_text/custom_text';

import CustomInputText from '../custom_component/custom_input_text/custom_input_text';
import {AppColor} from '../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppRoute} from '../consts/routes';

const LoginPage = ({navigation}: any) => {
  const login = () => {
    setIsLoading(true);
    navigation.navigate(AppRoute.MainPage);
    setIsLoading(false);
  };
  const goToRegisterPage = () => {
    navigation.navigate(AppRoute.RegisterPage);
  };
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.loginPage}>
      <CustomText text="Login" textStyle={styles.titleStyle} />
      <CustomInputText
        placeholder="User"
        onChangeText={value => {
          console.log(value);
        }}
        marginVertical={10}
      />
      <CustomButton text="Login" onPress={login} isLoading={isLoading} />
      <View style={{flexDirection: 'row'}}>
        <Text>No account, </Text>
        <CustomText text="Sign up" onPress={goToRegisterPage} />
      </View>
      <Icon name={'facebook'} size={14} color="black"></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
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

export default LoginPage;
