import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{...FONTS.h4, color: COLORS.white}}>Good Morning</Text>
        <Text style={{...FONTS.h3, color: COLORS.white, marginTop: SIZES.base}}>
          Batricia Salfiora
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('Add points')}
        style={{
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 35,
          borderRadius: 20,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,.2)',
            padding: 2,
            borderRadius: 20,
          }}>
          <Image
            source={icons.plus_icon}
            resizeMode="contain"
            style={{height: 18, width: 18}}
          />
        </View>
        <Text
          style={{...FONTS.h4, color: COLORS.white, marginLeft: SIZES.base}}>
          240{' '}
          <Text style={{...FONTS.h4, color: COLORS.white, fontSize: 12}}>
            points
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
