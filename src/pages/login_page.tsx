import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import CustomButton from '../common/custom_button/custom_button';
import CustomText from '../common/custom_text/custom_text';
import CustomInputText from '../common/custom_input_text/custom_input_text';
import CustomIcon from '../common/custom_icon/custom_icon';
import {AppColor} from '../consts/colors';
import {AppRoute} from '../consts/routes';

import {updateUser} from '../redux/slice/user_slice';
import {storage} from '../mmkv-storage/mmkv_storage';
import Toast from 'react-native-toast-message';

const LoginPage = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [error, setError] = useState<String>('');
  const [email, setEmail] = useState<string>('bob@gmail.com');
  //ketty@gmail.com pwd->same
  const [password, setPassword] = useState<string>('1234567');

  const dispatch = useDispatch();

  const login = async () => {
    setIsLoading(true);
    // setError('');
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res);
      setIsLoading(false);
      storage.set('user.uid', res.user.uid!);
      storage.set('user.email', res.user.email!);
      dispatch(
        updateUser({
          email: res.user.email,
          uid: res.user.uid,
        }),
      );
    } catch (e: any) {
      console.log(e);
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: e.code,
        position: 'bottom',
      });
      // setError(e.code);
    }
  };
  const goToRegisterPage = () => {
    navigation.navigate(AppRoute.RegisterPage);
  };

  return (
    <View style={styles.container}>
      <CustomText text="Login" textStyle={styles.titleStyle} />
      <CustomInputText
        placeholder="Email"
        onChangeText={value => {
          setEmail(value);
        }}
        marginVertical={10}
      />

      <CustomInputText
        placeholder="Password"
        onChangeText={value => {
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

      <CustomButton text="Login" onPress={login} isLoading={isLoading} />
      <View style={{flexDirection: 'row'}}>
        <Text>No account, </Text>
        <CustomText text="Sign up" onPress={goToRegisterPage} />
      </View>
      <Text>--OR--</Text>
      {/* sign in other methods */}
      <View
        style={{
          flexDirection: 'row',
          width: 100,
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          marginVertical: 8,
          borderWidth: 1,
          borderColor: AppColor.primary,
          paddingVertical: 8,
        }}>
        <CustomIcon icon={'facebook'} size={17} style={styles.iconStyle} />
        <CustomIcon icon={'google'} size={17} style={styles.iconStyle} />
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
  iconStyle: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: AppColor.primary,
  },
});

export default LoginPage;
