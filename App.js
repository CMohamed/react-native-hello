/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';

const App: () => Node = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Mohamed CHADAD</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;
