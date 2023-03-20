import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../../consts/colors';
//import { AppColor } from '../../consts/colors';

interface inputTextInterface {
  placeholder: string;
  onChangeText: (value: string) => void;
  value?: string;
  marginVertical?: number;
  marginHorizontal?: number;
  secureTextEntry?: boolean;
  trailingIcon?: boolean;
  iconPressed?: () => void;
}

const CustomInputText = ({
  placeholder,
  onChangeText,
  value,
  marginVertical,
  marginHorizontal,
  secureTextEntry = false,
  trailingIcon = false,
  iconPressed,
}: inputTextInterface) => {
  console.log(marginVertical);

  return (
    <View style={[styles.inputTextContainer,{
      //backgroundColor: 'orange',
      width: '80%',
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
    }]}>
      <TextInput
        style={[
          {
            //backgroundColor: 'green',
            width: '90%',
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {trailingIcon && (
        <TouchableOpacity onPress={iconPressed}>
          {!secureTextEntry ? (
            <Icon name={'facebook'} size={14} color='black'></Icon>
          ) : (
            <Icon name={'eye-slash'} size={14} color='black'></Icon>
          )}
        </TouchableOpacity>

      )}

      
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextContainer: {
    width: '70%',
    borderColor: AppColor.black,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:6,
  },
  // inputTextStyle: {
  //   width: '70%',
  //   borderColor: AppColor.black,
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   paddingLeft: 10,
  //   justifyContent: 'center',
  //   backgroundColor:'green'
  // },
});

export default CustomInputText;
