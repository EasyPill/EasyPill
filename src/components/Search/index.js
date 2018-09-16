import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';

class Search extends Component {
  state = {
    isFocused: false,
  };

  render() {
    const { onTypeCharacter, onButtonPress } = this.props;
    const { isFocused } = this.state;
    return (
      <View style={styles.container}>
        {isFocused ? null : (
          <Image
            source={require('../../assets/images/easyPill_text.png')}
            style={{
              height: isFocused ? 50 : 150,
              resizeMode: 'contain',
              marginVertical: 40,
            }}
          />
        )}
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <TextInput
            autoCapitalize={'words'}
            autoFocus={true}
            onChangeText={onTypeCharacter}
            placeholder={'Drug or Pill'}
            placeholderTextColor={'#aaa79b'}
            style={styles.textInput}
            isFocused={focused => this.setState({ isFocused: focused })}
          />
          <RkButton onPress={onButtonPress}>Search Dosis</RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch', // or 'stretch'
  },
  textInput: {
    color: '#fff',
    fontSize: 20,
    paddingVertical: 40,
  },
});

export default Search;
