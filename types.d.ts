import {StackNavigationProp} from '@react-navigation/stack';

export type HomeBottomTabParamList = {
  HomeScreen: undefined;
  Search: undefined;
  Notifications: undefined;
  Menu: undefined;
};

export type RootStackParamList = {
  HomeTabs: HomeBottomTabParamList;
  BookDetails: {
    bookId: number;
  };
};

export type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type BookDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  'BookDetails'
>;