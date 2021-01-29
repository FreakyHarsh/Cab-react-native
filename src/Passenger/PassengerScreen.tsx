import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import WheelLogo from '../components/WheelLogo';
import { useStore } from '../store/store';
import { ScreenNavProps } from '../types/ScreenParamList';

function PassengerScreen({ navigation }: ScreenNavProps<'Passenger'>) {
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
          Login: (): any => <Login login={() => navigation.navigate('Booking')} />,
          SignUp: (): any => <SignUp />,
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}

export default PassengerScreen;
