import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {BookDetailRouteProps} from '../../types';
import {COLORS, dummyData, SIZES} from '../../constants';
import {Header} from './components';

const BookDetail = () => {
  const bookId = useRoute<BookDetailRouteProps>().params.bookId;
  const book = dummyData.myBooksData.find(bk => bk.id === bookId);
  if (!bookId || !book) return null;

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <ImageBackground
          source={book.bookCover}
          resizeMode="stretch"
          style={{
            height: 472,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              backgroundColor: book.backgroundColor,
            }}>
            <Header />
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: COLORS.black,
            minHeight: 300,
          }}>
          <Text>BookDetail</Text>
          <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
