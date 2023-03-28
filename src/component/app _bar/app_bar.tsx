import {Button, FlatList, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../../common/custom_icon/custom_icon';
import CustomText from '../../common/custom_text/custom_text';

interface AppbarInterface {
  // imageUrls: string[];
  // height?: number;
  // marginHorizontal?: number;
}

const Appbar = ({}: AppbarInterface) => {
  return (
    <View style={[styles.appBar]}>
      <CustomText text="Shopy.." />
      <View style={{flexDirection:'row'}}>
      <CustomIcon icon="search" style={styles.iconStyle} onPress={() => {}} />
      <CustomIcon icon="shopping-basket" style={styles.iconStyle} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    borderColor: AppColor.primary,
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginHorizontal: 8,
    marginVertical: 4,
    elevation: 2,
  },
  iconStyle: {
    padding: 5,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
});

export default Appbar;
