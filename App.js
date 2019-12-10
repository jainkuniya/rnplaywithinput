/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, TextInput} from 'react-native';
import {WebView} from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          backgroundColor: 'red',
          flex: 1,
          margin: 56,
        }}>
        <Text>some random text</Text>
        <WebView source={{uri: 'https://facebook.github.io/react-native/'}} />
        <View>
          <TextInput style={{backgroundColor: 'gray'}} />

          <TextInput style={{backgroundColor: 'pink'}} multiline />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
