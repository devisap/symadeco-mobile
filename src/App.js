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
import Heading1 from './components/atoms/typography/Heading1'
import Heading2 from './components/atoms/typography/Heading2'
import Heading3 from './components/atoms/typography/Heading3'
import Paragraph from './components/atoms/typography/Paragraph'
import ButtonPrimary from './components/atoms/buttons/ButtonPrimary'
import SplashScreen from './components/pages/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './config/router';
import LoginLayout from './components/templates/LoginLayout';
import DashboardLayout from './components/templates/DashboardLayout';
import DaftarKlienLayout from './components/templates/DaftarKlienLayout';
import SelectFilterField from './components/atoms/forms/SelectFilterField';
const App = () => {

  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    <DaftarKlienLayout />
    // <SelectFilterField />
  );
};

const styles = StyleSheet.create({
});

export default App;
