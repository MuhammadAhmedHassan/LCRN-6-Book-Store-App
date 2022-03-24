import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BookType} from '../../../constants/dummy-data';
import {COLORS, FONTS, SIZES} from '../../../constants';

interface IProps {
  book: BookType;
}

const BookInfo = ({book}: IProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={book.bookCover}
        resizeMode="contain"
        style={{height: 200, width: 133}}
      />

      <Text
        style={{
          ...FONTS.h2,
          color: book.navTintColor,
          marginTop: SIZES.font,
        }}>
        {book.bookName}
      </Text>
      <Text
        style={{
          ...FONTS.h3,
          color: book.navTintColor,
          marginTop: SIZES.base,
        }}>
        {book.author}
      </Text>
    </View>
  );
};

export default BookInfo;

const styles = StyleSheet.create({});
