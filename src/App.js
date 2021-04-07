/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
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
import Paragraph from './components/atoms/typography/Paragraph'
import ButtonPrimary from './components/atoms/buttons/ButtonPrimary'
const App: () => Node = () => {

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <Heading1 />
      <Heading2 />
      <Paragraph />
      <ButtonPrimary />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
