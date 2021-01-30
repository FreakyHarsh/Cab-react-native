import React from 'react';
import { View, Dimensions } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WheelLogo from '../components/WheelLogo';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { ScreenNavProps } from '../types/ScreenParamList';

function DriverScreen({ navigation }: ScreenNavProps<'Driver'>) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Login', title: 'Login' },
    { key: 'SignUp', title: 'Sign Up' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#FFD428' }}
    />
  );
  return (
    <>
      <View style={{ height: '10%', backgroundColor: '#FFD428' }}></View>
      <View style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFD428' }}>
        <View style={{ backgroundColor: '#FFF', padding: 15, borderRadius: 20, marginBottom: 10 }}>
          <WheelLogo />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          Login: (): any => (
            <Login goToMainScreen={() => navigation.navigate('TourList')} isDriver />
          ),
          SignUp: (): any => (
            <SignUp goToMainScreen={() => navigation.navigate('TourList')} isDriver />
          ),
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}

export default DriverScreen;
