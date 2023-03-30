import {Button, FlatList, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomImage from '../../common/custom_image/custom_image';
import {AppColor} from '../../consts/colors';
import CustomIcon from '../../common/custom_icon/custom_icon';

interface imageContainerInterface {
  imageUrls: string[];
  height?: number;
  marginHorizontal?: number;
}

const ImageContainer = ({
  imageUrls,
  height = 20,
  marginHorizontal = 0,
}: imageContainerInterface) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  const manipulate = () => {
    setVisible(!visible);
  };

  return (
    <View style={[styles.box, {height: height, marginHorizontal}]}>
      <FlatList
        horizontal={true}
        data={imageUrls}
        renderItem={({item}) => {
          return (
            <CustomImage
              imageUrl={item}
              height={height}
              width={height}
              margin={1}
              onPress={() => {
                setImage(item);
                manipulate();
              }}
            />
          );
        }}
      />
      <ImageModel visible={visible} toggle={manipulate} imageUrl={image} />
    </View>
  );
};

interface imageModelInterface {
  imageUrl: string;
  visible: boolean;
  toggle: () => void;
}

const ImageModel = ({imageUrl, visible, toggle}: imageModelInterface) => {
  return (
    <>
      <Modal visible={visible} onRequestClose={toggle} >
        <View
          style={{
            width: '100%',
            height:'80%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomIcon
            icon="close"
            size={20}
            color={AppColor.primary}
            style={styles.iconStyle}
            onPress={toggle}
          />
          <CustomImage
            imageUrl={imageUrl}
            
            height={'90%'}
            onPress={() => {}}
            width={300}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: AppColor.primary,
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  iconStyle: {
    // padding: 5,
    margin:5,
    borderRadius: 50,
    borderWidth: 1,

  },
});

export default ImageContainer;
