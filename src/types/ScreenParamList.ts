import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type ScreenParamList = {
  Home: undefined;
  Driver: undefined;
  Passenger: undefined;
}


export type ScreenNavProps<T extends keyof ScreenParamList> = {
  navigation: StackNavigationProp<ScreenParamList, T>;
  route: RouteProp<ScreenParamList, T>
}