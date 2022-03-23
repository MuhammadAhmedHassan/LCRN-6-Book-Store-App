import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Header} from './components';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar />

      {/* Header */}
      <Header />
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
