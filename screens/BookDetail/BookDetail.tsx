import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {BookDetailRouteProps} from '../../types';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {BookInfo, Header} from './components';

const BookDetail = () => {
  const bookId = useRoute<BookDetailRouteProps>().params.bookId;
  const book = dummyData.myBooksData.find(bk => bk.id === bookId);
  if (!bookId || !book) return null;

  const renderInfo = (info: string | number, lable: string) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: SIZES.font,
          height: '100%',
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: book.navTintColor,
            textAlign: 'center',
          }}>
          {info}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: book.navTintColor,
            opacity: 0.4,
            textAlign: 'center',
          }}>
          {lable}
        </Text>
      </View>
    );
  };

  const separator = () => (
    <View
      style={{
        height: 40,
        width: 1,
        backgroundColor: COLORS.lightGray4,
        opacity: 0.5,
      }}
    />
  );

  return (
    <SafeAreaView>
      <StatusBar />

      <ImageBackground
        source={book.bookCover}
        resizeMode="stretch"
        style={{
          height: 505,
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: book.backgroundColor,
          }}>
          <Header navTintColor={book.navTintColor} />
          <BookInfo book={book} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              minHeight: 90,
              backgroundColor: 'rgba(0,0,0,.1)',
              marginBottom: SIZES.padding,
              marginHorizontal: SIZES.padding,
              borderRadius: 15,
            }}>
            {renderInfo(book.rating, 'Rating')}
            {separator()}
            {renderInfo(book.pageNo, 'Number of Page')}
            {separator()}
            {renderInfo(book.language, 'Language')}
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          backgroundColor: COLORS.black,
          height: 270,
          padding: SIZES.padding,
          paddingBottom: SIZES.padding2 * 2.5,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.white}}>Description</Text>
        <ScrollView scrollEventThrottle={16} style={{marginTop: 4}}>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.lightGray3,
              fontWeight: '200',
              marginTop: SIZES.font,
            }}>
            {book.description}
          </Text>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: SIZES.padding,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255,255,255,.07)',
              padding: SIZES.padding,
              borderRadius: 15,
              marginRight: SIZES.padding,
            }}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{height: 20, width: 20, tintColor: COLORS.white}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: SIZES.padding,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              Start Reading
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
