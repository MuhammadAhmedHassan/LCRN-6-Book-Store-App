import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {COLORS, dummyData} from '../../constants';
import {BookDetailRouteProps} from '../../types';
import {BookDescription, BookInfoSection, BottomButtons} from './components';
import {ScrollView} from 'react-native-gesture-handler';

const BookDetailAnimatd = () => {
  const bookId = useRoute<BookDetailRouteProps>().params.bookId;
  const book = dummyData.myBooksData.find(bk => bk.id === bookId);
  if (!bookId || !book) return null;

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Book cover section */}
      <View
        style={{
          height: 460,
        }}>
        <BookInfoSection book={book} />
      </View>
      <View
        style={{
          height: 230,
        }}>
        <BookDescription book={book} />
      </View>
      <View style={{height: 70, marginBottom: 10}}>
        <BottomButtons />
      </View>
    </ScrollView>
  );
};

export default BookDetailAnimatd;

const styles = StyleSheet.create({});
