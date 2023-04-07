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
import IconAndText from '../component/icon_and_text/icon_and_text';

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
        const arrayData = Object.entries(data).map(([key, value]:any) => ({
          ...value,
          id: key,
        }));
        setUserHistory(arrayData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getItemFromFB();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContianer}>
        <ActivityIndicator />
        <Text>Please wait ...</Text>
        </View>
      ) : (
        <FlatList
          data={userHistory}
          renderItem={({item}: {item: IHistory}) => {
            return <HistoryCart item={item} />;
          }}
        />
      )}
    </View>
  );
};

const HistoryCart = ({item}: {item: IHistory}) => {
  return (
    <View style={styles.cartContainer}>
      {/* top container for date and time */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <IconAndText title={item.date} icon="calendar" />
        <IconAndText title={item.time} icon="clock-o" />
      </View>

      <Text style={styles.textBold}>{item.product}</Text>

      {/* bottom container for total item and total price */}
      <View>
        <Text style={styles.textBold}>Total Quantity = {item.totalItem}</Text>
        <Text style={styles.textBold}>Total Price = $ {item.totalPrice}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.background,
    flex: 1,
  },
  loadingContianer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  cartContainer: {
    backgroundColor: AppColor.card,
    
    marginHorizontal: 1,
    marginVertical: 2,

    paddingHorizontal: 5,
    paddingVertical:3,

    borderLeftWidth:4
  },
  textBold: {fontWeight: 'bold', marginLeft: 8},
});

export default HistoryPage;