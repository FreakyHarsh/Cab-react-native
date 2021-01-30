import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { TourObj } from "./TourObj"

export type ScreenParamList = {
  Home: undefined;
  Driver: undefined;
  Passenger: undefined;
  Booking: undefined;
  BookingSuccess: undefined;
  TourList: undefined;
  AcceptTour: TourObj;
}


export type ScreenNavProps<T extends keyof ScreenParamList> = {
  navigation: StackNavigationProp<ScreenParamList, T>;
  route: RouteProp<ScreenParamList, T>
}