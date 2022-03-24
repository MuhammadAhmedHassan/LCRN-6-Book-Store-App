import {
  ColorValue,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BookType} from '../../../constants/dummy-data';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  book: BookType;
}

const BookInfoSection = ({book}: IProps) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={book.bookCover}
        resizeMode="cover"
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: book.backgroundColor,
          }}>
          <BookDetailHeader tintColor={book.navTintColor} />
          {/* Book Cover */}
          <View
            style={{
              flex: 5,
              paddingTop: SIZES.font,
              alignItems: 'center',
            }}>
            <Image
              source={book.bookCover}
              resizeMode="contain"
              style={{
                flex: 1,
                width: 150,
                height: 'auto',
              }}
            />
          </View>

          {/* Book Name and Author */}
          <View
            style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...FONTS.h2, color: book.navTintColor}}>
              {book.bookName}
            </Text>
            <Text style={{...FONTS.body3, color: book.navTintColor}}>
              {book.author}
            </Text>
          </View>

          {/* Book Info */}
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              margin: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
            {/* Rating */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{...FONTS.h3, color: COLORS.white}}>
                {book.rating}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white}}>Rating</Text>
            </View>

            <LineDivider />

            {/* Pages */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: SIZES.radius,
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.h3, color: COLORS.white}}>
                {book.pageNo}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white}}>
                Number of Page
              </Text>
            </View>

            <LineDivider />

            {/* Language */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{...FONTS.h3, color: COLORS.white}}>
                {book.language}
              </Text>
              <Text style={{...FONTS.body4, color: COLORS.white}}>
                Language
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookInfoSection;

const styles = StyleSheet.create({});

interface IBookDetailHeader {
  tintColor: ColorValue;
}

function BookDetailHeader({tintColor}: IBookDetailHeader) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: SIZES.radius,
        marginTop: SIZES.padding,
      }}>
      <TouchableOpacity
        style={{marginLeft: SIZES.base}}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back_arrow_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
        />
      </TouchableOpacity>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3, color: tintColor}}>Book Detail</Text>
      </View>

      <TouchableOpacity
        style={{marginRight: SIZES.base}}
        onPress={() => console.log('Click More')}>
        <Image
          source={icons.more_icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: tintColor,
            alignSelf: 'flex-end',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};
