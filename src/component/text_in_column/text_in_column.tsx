import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../../common/custom_icon/custom_icon';
import CustomText from '../../common/custom_text/custom_text';
import CustomIconWithNumber from '../custom_icon_with_number/custom_icon_with_number';

interface AppbarInterface {
  totalItem:number;
  cartPage:()=>void;
  searchPage:()=>void;
}

const Appbar = ({totalItem,cartPage,searchPage}: AppbarInterface) => {
  return (
    <View style={[styles.appBar]}>
      <CustomText text="Shop it.." textStyle={styles.titleStyle}/>
      <View style={{flexDirection:'row'}}>
      <CustomIcon icon="search" style={styles.iconStyle} onPress={searchPage} size={20} />
      {/* <CustomIcon icon="shopping-basket" style={styles.iconStyle} onPress={() => {}} /> */}
      <CustomIconWithNumber icon="shopping-basket" style={styles.iconStyle} onPress={cartPage} size={20} number={totalItem} />
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
  //padding: 5,
    margin: 5,
    marginRight:10,
    borderRadius: 50,
    borderWidth: 1,
  },
  titleStyle:{
    fontSize:30,
    fontWeight:'700'
  }
});

export default Appbar;
