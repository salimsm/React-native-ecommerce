import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';
import CustomInputText from '../common/custom_input_text/custom_input_text';
import {AppColor} from '../consts/colors';
import {AppRoute} from '../consts/routes';
import Toast from 'react-native-toast-message';

/*
doc url for create user
https://rnfirebase.io/auth/usage#emailpassword-sign-in
*/

const RegisterPage = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<String>('');

  const register = async () => {
    setIsLoading(true);
    // setError('');
    try {
      const res = await auth().createUserWithEmailAndPassword(        
        email,
        password
      );
      console.log(res);
      setIsLoading(false);
      goToLoginPage();
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('Email address is already in use!');
        Toast.show({
          type: 'error',
          text1: 'Email address is already in use!',
          position: 'bottom',
        });
        // setError('Email address is already in use!');
      } else if (e.code === 'auth/invalid-email') {
        console.log('Email address is invalid!');
        Toast.show({
          type: 'error',
          text1: 'Email address is invalid!',
          position: 'bottom',
        });
        // setError('Email address is invalid!');
      } else if (e.code === 'auth/weak-password') {
        console.log('Password is weak should be > 6!');
        Toast.show({
          type: 'error',
          text1: 'Password is weak should be > 6!',
          position: 'bottom',
        });
        // setError('Password is weak should be > 6!');
      }
      setIsLoading(false);
    
    }
  };

  const goToLoginPage = () => {
    navigation.navigate(AppRoute.LoginPage);
  };
  return (
    <View style={styles.container}>
      <CustomText text="Register" textStyle={styles.titleStyle} />

      <CustomInputText
        placeholder="Email"
        onChangeText={value => {
          console.log(value);
          setEmail(value);
        }}
        marginVertical={10}
      />

      <CustomInputText
        placeholder="Password"
        onChangeText={value => {
          console.log(value);
          setPassword(value);
        }}
        marginVertical={10}
        secureTextEntry={showPassword}
        trailingIcon={true}
        iconPressed={() => {
          setShowPassword(!showPassword);
        }}
      />
      
      {/* {error ? (
        <Text style={{color: 'red', marginBottom: 4}}>{error}</Text>
      ) : (
        <></>
      )} */}

      <CustomButton text="Register" onPress={register} isLoading={isLoading} />
      <View style={{flexDirection: 'row'}}>
        <Text>Already have an account, </Text>
        <CustomText text="Sign in" onPress={goToLoginPage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
