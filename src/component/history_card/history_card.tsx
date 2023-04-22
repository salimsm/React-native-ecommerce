import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import RowWrapper from '../wrapper/row_wrapper/row_wrapper';

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
      <RowWrapper>
        <Text style={styles.dateTimeStyle}>{item.date}</Text>
        <Text style={styles.dateTimeStyle}>{item.time}</Text>
      </RowWrapper>
      <View
        style={styles.innerContainer}>
        <Text style={styles.productText}>{item.product}</Text>
        <RowWrapper>
          <RowText title="Total Quantity:" value={item.totalItem} />
          <RowText title="Total Price:" value={item.totalPrice} />
        </RowWrapper>
      </View>
    </View>
  );
};

const RowText = ({title, value}: any) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 14}}>{title}</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}> {value} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {marginVertical: 5, marginHorizontal: 5},
  dateTimeStyle:{fontSize: 12, color: 'grey'},
  innerContainer:{
    backgroundColor: AppColor.card,
    padding: 8,
    borderLeftWidth: 5,
  },
  productText: {
    fontSize: 14,
    color:AppColor.black
  },
});

export default HistoryCard;
