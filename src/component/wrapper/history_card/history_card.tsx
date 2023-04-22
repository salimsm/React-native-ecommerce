import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { AppColor } from '../../../consts/colors';

interface IHistory {
  date: string;
  time: string;
  product: string;
  totalItem: number;
  totalPrice: number;
}

const HistoryCard = ({item}: {item: IHistory}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 10, color: 'grey'}}>{item.date}</Text>
        <Text style={{fontSize: 10, color: 'grey'}}>{item.time}</Text>
      </View>

      <View
        style={{
          backgroundColor: AppColor.card,
          padding: 8,
          borderLeftWidth: 5,
        }}>
        <Text style={styles.productText}>{item.product}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RowText title="Total Quantity:" value={item.totalItem} />
          <RowText title="Total Price:" value={item.totalPrice} />
        </View>
      </View>
    </View>
  );
};

const RowText = ({title, value}: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 12}}>{title}</Text>
      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{value} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {marginVertical: 5, marginHorizontal: 5},
  productText: {
    fontSize: 11,
    //    fontWeight: 'bold',
  },
});

export default HistoryCard;
