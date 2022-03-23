import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const ActionBar = () => {
  const getActionBtn = (icon: ImageSourcePropType, label: string) => (
    <TouchableOpacity
      onPress={() => console.log(`Pressed ${label}`)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{height: 25, width: 25}}
      />
      <Text style={{...FONTS.h4, color: COLORS.white, marginLeft: SIZES.base}}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const separator = () => (
    <View
      style={{width: 1, height: '100%', backgroundColor: COLORS.lightGray}}
    />
  );

  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {getActionBtn(icons.claim_icon, 'Claim')}
      {separator()}
      {getActionBtn(icons.point_icon, 'Get Point')}
      {separator()}
      {getActionBtn(icons.card_icon, 'My Card')}
    </View>
  );
};

export default ActionBar;

const styles = StyleSheet.create({});
