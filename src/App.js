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
import Router from './config/Router';
import { SplashScreen } from './pages';
import Dashboard from './pages/Dashboard';
import Klien from './pages/klien/Klien';
import KlienEdit from './pages/klien/KlienEdit';
import Login from './pages/Login';
import Pemasukan from './pages/pemasukan/Pemasukan';
import PemasukanAdd from './pages/pemasukan/PemasukanAdd';
import Pemesanan from './pages/pemesanan/Pemesanan';
import PemesananAdd from './pages/pemesanan/PemesananAdd';
import Pengeluaran from './pages/pengeluaran/Pengeluaran';
import SKK from './pages/skk/SKK';
import SKKAdd from './pages/skk/SKKAdd';
import SOP from './pages/sop/SOP';
import SOPAdd from './pages/sop/SOPAdd';
const App = () => {
  return (
    // <SplashScreen />
    // <Login />
    // <Dashboard />
    // <Klien />
    // <KlienEdit />
    <Router />
    // <PemesananAdd />
    // <SKKAdd />
    // <Pemasukan />
    // <PemasukanAdd />
    // <Pengeluaran />
    // <SOP />
    // <SOPAdd />
  );
};

const styles = StyleSheet.create({
});

export default App;
