import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

import { getLeaflet } from '../../api';

const Dosage = props => {
  const { store, reducers } = props.screenProps;

  // selection is either 'adult' or 'child'
  const chooseAge = selection => {
    console.log({ selection });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={styles.text}>{'Your dosage'}</Text>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.headContainer}
            onPress={() => chooseAge('adult')}
          >
            <Text style={styles.head}>☀️</Text>
          </TouchableOpacity>
          <Text style={styles.dose}>3</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.headContainer}
            onPress={() => chooseAge('child')}
          >
            <Text style={styles.head}>🍜</Text>
          </TouchableOpacity>
          <Text style={styles.dose}>2</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.headContainer}
            onPress={() => chooseAge('child')}
          >
            <Text style={styles.head}>🌘</Text>
          </TouchableOpacity>
          <Text style={styles.dose}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default Dosage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch', // or 'stretch'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#fff',
    marginTop: 30,
  },
  headContainer: {
    padding: 20,
  },
  head: {
    fontSize: 100,
  },
  dose: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
