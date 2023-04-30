import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../../common/custom_icon/custom_icon';

interface IInputTextAppbar {
  placeholder: string;
  onChangeText?: (value:string) => void;
  leadingIcon?: string;
  trailingIcon?: string;
  leadingIconPressed?: () => void;
  trailingIconPressed?: () => void;
}

const InputTextAppbar = ({
  placeholder,
  onChangeText,
  leadingIcon,
  trailingIcon,
  leadingIconPressed,
  trailingIconPressed,
}: IInputTextAppbar) => {
  return (
    <View style={styles.appBar}>
      {leadingIcon ? (
        <CustomIcon
          icon={leadingIcon}
          onPress={leadingIconPressed}
          size={20}
          color={AppColor.white}
        />
      ) : (
        <Text></Text>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={AppColor.card}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      {/* <Text style={styles.titleStyle}>{title}</Text> */}
      {trailingIcon ? (
        <CustomIcon
          icon={trailingIcon}
          onPress={trailingIconPressed}
          size={20}
          color={AppColor.white}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: AppColor.primary,
    borderBottomWidth: 1,
    borderColor: AppColor.tertiary,

    paddingHorizontal: 12,
    paddingVertical: 7,

    elevation: 2,
    marginBottom: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    color: AppColor.white,
    borderBottomWidth:1,
    borderBottomColor:AppColor.card,
    width:'60%',
  },
});

export default InputTextAppbar;
