import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {useSelector} from 'react-redux';
import HistoryCard from '../component/card/history_card/history_card';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';
import LoaderTextCard from '../component/loader_text_card/loader_text_card';
import { AppColor } from '../consts/colors';

interface IHistory {
  date: string;
  time: string;
  product: string;
  totalItem: number;
  totalPrice: number;
}

const HistoryPage = () => {
  const user = useSelector((state: any) => state.user);
  const [userHistory, setUserHistory] = useState<IHistory[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getItemFromFB = () => {
    database()
      .ref(`/users/${user.uid}`)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          const arrayData = Object.entries(data).map(([key, value]: any) => ({
            ...value,
            id: key,
          }));
          setUserHistory(arrayData);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    getItemFromFB();
  }, []);

  return (
    <View style={styles.container}>
      <SecondaryAppbar title="Recent Purchased" />
      {isLoading ? (
        <LoaderTextCard text='Please wait' loader={true}/>
      ) : userHistory ? (
        <FlatList
          data={userHistory}
          renderItem={({item}: {item: IHistory}) => {
            return <HistoryCard item={item} />;
          }}
        />
      ) : (
        <LoaderTextCard text='Nothing to show'/>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:AppColor.background
  },
  loadingContianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistoryPage;
