import React from 'react';
import { View } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';

const Search = ({ onTypeCharacter, onButtonPress }) => (
  <View>
    <RkTextInput label="Drug" onChangeText={onTypeCharacter} />
    <RkButton onPress={onButtonPress}>Search Dosis</RkButton>
  </View>
);

export default Search;
