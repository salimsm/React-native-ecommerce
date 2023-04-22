import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

import {AppColor} from '../consts/colors';
import {useSelector} from 'react-redux';
import HistoryCard from '../component/card/history_card/history_card';
import SecondaryAppbar from '../component/app _bar/secondary_app_bar';
import EmptyComponent from '../component/empty_component/empty_component';

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
        <View style={styles.loadingContianer}>
          <ActivityIndicator />
          <Text>Please wait ...</Text>
        </View>
      ) : userHistory ? (
        <FlatList
          data={userHistory}
          renderItem={({item}: {item: IHistory}) => {
            return <HistoryCard item={item} />;
          }}
        />
      ) : (
        <EmptyComponent text='Nothing to show'/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistoryPage;
