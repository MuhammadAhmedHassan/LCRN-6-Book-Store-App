import {
  ColorValue,
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../../constants';
import {BookType} from '../../../constants/dummy-data';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProp} from '../../../types';

const {categoriesData} = dummyData;

const CategoryList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categoriesData[0].id,
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <Categories
        selectedCategoryId={selectedCategoryId}
        handleSelectedCategory={setSelectedCategoryId}
      />

      <BooksList
        booksList={
          categoriesData.find(cat => cat.id === selectedCategoryId)!.books
        }
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});

interface IBooksList {
  booksList: BookType[];
}

function BooksList({booksList}: IBooksList) {
  const navigation = useNavigation<HomeScreenProp>();
  const booklistLength = booksList.length;

  const renderPagesAndRating = (
    icon: ImageSourcePropType,
    label: string,
    containerStyles: ViewStyle = {},
  ) => (
    <View
      style={{flexDirection: 'row', alignItems: 'center', ...containerStyles}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: 15,
          width: 15,
          tintColor: COLORS.lightGray,
        }}
      />
      <Text
        style={{
          ...FONTS.h4,
          color: COLORS.lightGray,
          marginLeft: SIZES.base,
        }}>
        {label}
      </Text>
    </View>
  );

  const renderGenre = (
    genre: {gen: string; backgroundColor: ColorValue; color: ColorValue}[],
  ) =>
    genre.map(({gen, backgroundColor, color}) => {
      return (
        <TouchableOpacity
          key={gen}
          style={{
            backgroundColor,
            paddingHorizontal: SIZES.font / 1.5,
            paddingVertical: SIZES.base / 2,
            borderRadius: 10,
            marginRight: SIZES.base,
            marginTop: SIZES.base,
            maxWidth: gen.length * SIZES.h4, // 14 is the font size,
          }}>
          <Text style={{...FONTS.h4, color}}>{gen}</Text>
        </TouchableOpacity>
      );
    });

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
      data={booksList}
      keyExtractor={item => `books-list-${item.id}`}
      contentContainerStyle={{
        marginHorizontal: SIZES.padding,
      }}
      renderItem={({item, index}) => {
        const lastItem = index === booklistLength - 1;
        return (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              marginTop: 18,
              marginBottom: lastItem ? SIZES.font : undefined,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('BookDetails', {bookId: item.id})
              }
              style={{
                flexDirection: 'row',
                width:
                  SIZES.width -
                  SIZES.padding * 2 - // 2 for both sides
                  40, // size of bookmark icon
                alignItems: 'center',
              }}>
              <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{height: 150, width: 100, borderRadius: 10}}
              />
              <View
                style={{
                  marginLeft: SIZES.font,
                  paddingTop: SIZES.base,
                  justifyContent: 'space-between',
                  // backgroundColor: 'pink',
                  flex: 1,
                  minHeight: 150,
                }}>
                {/* Book and author name */}
                <View>
                  <Text style={{...FONTS.h3, color: COLORS.white}}>
                    {item.bookName}
                  </Text>
                  <Text style={{...FONTS.h4, color: COLORS.lightGray}}>
                    {item.author}
                  </Text>
                </View>

                {/* remaining info */}
                <View style={{marginTop: SIZES.base}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {renderPagesAndRating(icons.page_icon, item.pageNo + 'p')}
                    {renderPagesAndRating(icons.read_icon, item.readed, {
                      marginLeft: SIZES.padding,
                    })}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      maxWidth:
                        SIZES.width -
                        SIZES.padding * 2 - // 2 for both sides
                        SIZES.font - // margin left
                        100 - // image size
                        30, // bookmark icon size ,
                    }}>
                    {renderGenre(item.genre)}
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: 40, marginTop: SIZES.font}}
              onPress={() => console.log('bookmark pressed')}>
              <Image
                source={icons.bookmark_icon}
                resizeMode="contain"
                style={{height: 30, width: 30, tintColor: COLORS.lightGray}}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

interface ICategories {
  selectedCategoryId: number;
  handleSelectedCategory(id: number): void;
}
function Categories({selectedCategoryId, handleSelectedCategory}: ICategories) {
  const length = categoriesData.length;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoriesData}
      keyExtractor={item => `categories-${item.id}`}
      renderItem={({item, index}) => {
        const lastItem = index === length - 1;
        const isSelected = selectedCategoryId === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelectedCategory(item.id)}
            style={{
              marginLeft: SIZES.padding,
              marginRight: lastItem ? SIZES.padding : undefined,
            }}>
            <Text
              style={{
                ...FONTS.h3,
                color: isSelected ? COLORS.white : COLORS.gray,
              }}>
              {item.categoryName}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
