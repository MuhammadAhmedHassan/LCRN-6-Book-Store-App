import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const BottomButtons = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {/* Bookmark */}
      <TouchableOpacity
        style={{
          width: 60,
          backgroundColor: COLORS.secondary,
          marginLeft: SIZES.padding,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => console.log('Bookmark')}>
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.lightGray2,
          }}
        />
      </TouchableOpacity>

      {/* Start Reading */}
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: COLORS.primary,
          marginHorizontal: SIZES.base,
          marginVertical: SIZES.base,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => console.log('Start Reading')}>
        <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;

const styles = StyleSheet.create({});
