/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
      return (
              <Text style={styles.description}>Search for houses to buy! (Again)</Text>
              );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 50,
    textAlign: 'center',
    color: '#656565',
    marginTop: 300,
  },
});

export default App;
