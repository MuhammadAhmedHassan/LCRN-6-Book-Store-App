import {RouteProp} from '@react-navigation/native';
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
export type BookDetailScreenProp = StackNavigationProp<
  RootStackParamList,
  'BookDetails'
>;
export type BookDetailRouteProps = RouteProp<RootStackParamList, 'BookDetails'>;
