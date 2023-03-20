import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface imageInterface {
  imageUrl: string;
  onPress: () => void;
  height: number;
  width: number;
}

const CustomImage = ({imageUrl, onPress, height, width}: imageInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: imageUrl}} style={{height: height, width: width}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomImage;
