import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../../constants';

const {myBooksData} = dummyData;
const MyBookList = () => {
  const booksLength = myBooksData.length;

  const renderInfo = (icon: ImageSourcePropType, info: string) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{height: 12, width: 12, tintColor: COLORS.lightGray}}
      />
      <Text
        style={{
          ...FONTS.h4,
          color: COLORS.lightGray,
          marginLeft: 6,
          fontSize: 13,
        }}>
        {info}
      </Text>
    </View>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <SectionHeader />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={myBooksData}
        keyExtractor={item => `mybook-${item.id}`}
        contentContainerStyle={{marginTop: SIZES.font}}
        renderItem={({item, index}) => {
          const firstItem = index === 0;
          const lastItem = index === booksLength - 1;
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                height: 260,
                width: 160,
                marginLeft: firstItem ? SIZES.padding : SIZES.font,
                marginRight: lastItem ? SIZES.padding : undefined,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{
                  width: 160,
                  height: 230,
                  borderRadius: 10,
                }}
              />
              {/* Info Section */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 6,
                }}>
                {renderInfo(icons.clock_icon, item.lastRead)}
                {renderInfo(icons.page_icon, item.completion)}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MyBookList;

const styles = StyleSheet.create({});

function SectionHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding,
      }}>
      <Text style={{...FONTS.h3, color: COLORS.white}}>My Book</Text>
      <TouchableOpacity>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.lightGray,
            textDecorationLine: 'underline',
          }}>
          see more
        </Text>
      </TouchableOpacity>
    </View>
  );
}
