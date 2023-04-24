import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../../common/custom_icon/custom_icon';

interface SecondaryAppbarInterface {
  title: string;
  leadingIcon?: string;
  trailingIcon?: string;
  leadingIconPressed?: () => void;
  trailingIconPressed?: () => void;
}

const SecondaryAppbar = ({
  title,
  leadingIcon,
  trailingIcon,
  leadingIconPressed,
  trailingIconPressed,
}: SecondaryAppbarInterface) => {
  return (
    <View style={styles.appBar}>
      {leadingIcon ? (
        <CustomIcon
          icon={leadingIcon}
          onPress={leadingIconPressed}
          size={20}
          color={AppColor.white}
        />
      ):<Text></Text>}
      <Text style={styles.titleStyle}>{title}</Text>
      {trailingIcon ? (
        <CustomIcon
          icon={trailingIcon}
          onPress={trailingIconPressed}
          size={20}
          color={AppColor.white}
        />
      ):<Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor:AppColor.primary,
    borderBottomWidth:1,
    borderColor: AppColor.tertiary,

    paddingHorizontal:8,
    paddingVertical:7,

    elevation:2,
    marginBottom:2,

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  titleStyle: {
    fontSize: 25,
    fontFamily: 'Laila-Medium',
    color:AppColor.white
  },
});

export default SecondaryAppbar;
