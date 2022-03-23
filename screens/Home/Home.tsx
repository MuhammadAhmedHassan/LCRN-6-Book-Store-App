import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {ActionBar, CategoryList, Header} from './components';
import MyBookList from './components/MyBookList';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar />

      {/* Header */}
      <Header />

      {/* ActionBar */}
      <ActionBar />

      <ScrollView
        automaticallyAdjustContentInsets={true}
        style={{
          // backgroundColor: 'pink',
        }}>
        {/* My Book list */}
        <MyBookList />

        {/* Category list */}
        <CategoryList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
