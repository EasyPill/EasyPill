import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

class Search extends Component {
  render() {
    const { onTypeCharacter, onButtonPress } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/easyPill_text.png')}
          style={{
            height: this.textInput && this.textInput.isFocused() ? 80 : 150,
            resizeMode: 'contain',
            marginVertical: 40,
          }}
        />
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <TextInput
            ref={ref => {
              this.textInput = ref;
            }}
            autoCapitalize={'words'}
            autoFocus={true}
            onChangeText={onTypeCharacter}
            placeholder={'Drug or Pill'}
            placeholderTextColor={'#aaa79b'}
            style={styles.textInput}
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
