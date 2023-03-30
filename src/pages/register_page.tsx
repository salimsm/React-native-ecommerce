import {StyleSheet, Text, View} from 'react-native';

import React, {useState} from 'react';
import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';
import {AppColor} from '../consts/colors';
import CustomInputText from '../common/custom_input_text/custom_input_text';
import {AppRoute} from '../consts/routes';

import auth from '@react-native-firebase/auth';

const RegisterPage = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String>('');

  const register = async () => {
    setIsLoading(true);
    setError(
      ''
    );
    try {
      const res = await auth().createUserWithEmailAndPassword(
        'abc@gmail.com',
        '123',
      );
      console.log(res);
      setIsLoading(false);
      goToLoginPage();
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('Email address is already in use!');
        setError(
          'Email address is already in use!',
        );
      } else if (e.code === 'auth/invalid-email') {
        console.log('Email address is invalid!');
        setError(
          'Email address is invalid!',
        );
      } else if (e.code === 'auth/weak-password') {
        console.log('Password is weak should be > 6!');
        setError(
          'Password is weak should be > 6!',
        );
      }
      setIsLoading(false);
      // >>> common error
      // setError(
      //   'Error, please check email or \n password should be >6 character',
      // );
    }
  };

  const goToLoginPage = () => {
    navigation.navigate(AppRoute.LoginPage);
  };
  return (
    <View style={styles.registerPage}>
      <CustomText text="Register" textStyle={styles.titleStyle} />

      <CustomInputText
        placeholder="Email"
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
      {error ? (
        <Text style={{color: 'red', marginBottom: 4}}>{error}</Text>
      ) : (
        <></>
      )}
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
