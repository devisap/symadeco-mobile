/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SplashScreen } from './pages';
import Dashboard from './pages/Dashboard';
import Klien from './pages/klien/Klien';
import KlienEdit from './pages/klien/KlienEdit';
import Login from './pages/Login';
import Pemesanan from './pages/pemesanan/Pemesanan';
import PemesananAdd from './pages/pemesanan/PemesananAdd';
const App = () => {
  return (
    // <SplashScreen />
    // <Login />
    // <Dashboard />
    // <Klien />
    // <KlienEdit />
    <Pemesanan />
    // <PemesananAdd />
  );
};

const styles = StyleSheet.create({
});

export default App;
