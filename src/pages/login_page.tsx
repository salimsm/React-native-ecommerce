import {StyleSheet, Text, View} from 'react-native';

import React, {useState} from 'react';
import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';

import {AppColor} from '../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppRoute} from '../consts/routes';
import CustomInputText from '../common/custom_input_text/custom_input_text';
import CustomIcon from '../common/custom_icon/custom_icon';

const LoginPage = ({navigation}: any) => {
  const login = () => {
    setIsLoading(true);
    setInterval(() => {
      navigation.navigate('BottomTab');
      setIsLoading(false);
    }, 1000);
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
      <Text>--OR--</Text>
      <View
        style={{
          flexDirection: 'row',
          width: 100,
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          marginVertical:8,
          borderWidth:1,
          borderColor:AppColor.primary,
          paddingVertical:8
          

        }}>
        <CustomIcon icon={'facebook'} size={17} style={styles.iconStyle} />
        <CustomIcon icon={'google'} size={17} style={styles.iconStyle}/>
      </View>
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
  iconStyle:{
    borderRadius:50,
    borderWidth:2,
    borderColor:AppColor.primary
  }
});

export default LoginPage;
