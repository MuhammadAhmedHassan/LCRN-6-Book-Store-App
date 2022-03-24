import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  ColorValue,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {BookDetailScreenProp} from '../../../types';

interface IProps {
  navTintColor: ColorValue;
}

const Header = ({navTintColor}: IProps) => {
  const navigation = useNavigation<BookDetailScreenProp>();

  const getButton = (icon: ImageSourcePropType, onPress?: () => void) => (
    <TouchableOpacity onPress={() => onPress && onPress()}>
      <Image
        source={icon}
        style={{height: 20, width: 20, tintColor: navTintColor}}
      />
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
      }}>
      {getButton(icons.back_arrow_icon, () => navigation.goBack())}
      <Text style={{...FONTS.h3, color: navTintColor}}>Detail Book</Text>
      {getButton(icons.more_icon)}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
