import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {storage} from '../mmkv-storage/mmkv_storage';
import {RootState} from '../redux/store/store';
import AuthStack from '../navigation/stack_navigation/auth_stack';
import BottomTab from '../navigation/bottom_tab_navigation/bottom_tab';
import {NavigationContainer} from '@react-navigation/native';
import {updateUser} from '../redux/slice/user_slice';

const InitialPage = () => {
  console.log('Initial Screen');
  const userEmail = storage.getString('user.email');
  const userUid = storage.getString('user.uid');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUser({email: userEmail, uid: userUid}));
  }, []);

  const user = useSelector((state: RootState) => state.user);
  console.log(user,'user form initial');
  
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {user.uid ? <BottomTab /> : <AuthStack />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default InitialPage;
