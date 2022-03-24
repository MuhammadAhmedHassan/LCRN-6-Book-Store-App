import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {BookType} from '../../../constants/dummy-data';

interface IProps {
  book: BookType;
}

const BookDescription = ({book}: IProps) => {
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);

  const indicator = useRef(new Animated.Value(0)).current;

  const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;
  return (
    <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
      {/* Custom Scrollbar */}
      <View style={{width: 4, height: '100%', backgroundColor: COLORS.gray1}}>
        <Animated.View
          style={{
            width: 4,
            height: indicatorSize,
            backgroundColor: COLORS.lightGray4,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  scrollViewVisibleHeight / scrollViewWholeHeight,
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </View>
      {/* Description */}
      <ScrollView
        contentContainerStyle={{paddingLeft: SIZES.padding}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onContentSizeChange={(width, height) => {
          console.log('scrollView whole height', height);
          setScrollViewWholeHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: {x, y, width, height},
          },
        }) => {
          console.log('scrollView visible height', height);
          setScrollViewVisibleHeight(height);
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: indicator}},
            },
          ],
          {useNativeDriver: false},
        )}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            marginBottom: SIZES.padding,
          }}>
          Description
        </Text>
        <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
          {book.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default BookDescription;

const styles = StyleSheet.create({});
