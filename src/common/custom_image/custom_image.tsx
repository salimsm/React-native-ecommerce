import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface ImageInterface {
  imageUrl: string;
  onPress: () => void;
  height: number | string;
  width: number | string;
  margin?: number;
}

const CustomImage: React.FC<ImageInterface> = ({imageUrl, onPress, height, width, margin}:ImageInterface) => {
  return (
    <TouchableOpacity onPress={onPress} style={{margin:margin}}>
      <Image source={{uri: imageUrl}} style={{height: height, width: width}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CustomImage;
