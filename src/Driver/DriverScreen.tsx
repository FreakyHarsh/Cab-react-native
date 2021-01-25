import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import WheelLogo from '../components/WheelLogo';
import Login from './Login';

const styles = StyleSheet.create({});

const SecondRoute = () => <View style={{ backgroundColor: '#FFD428' }} />;

function DriverScreen() {
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
        <View style={{ backgroundColor: '#FFF', padding: 15, borderRadius: 20 }}>
          <WheelLogo />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          Login: Login,
          SignUp: SecondRoute,
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
      />
    </>
  );
}

export default DriverScreen;
