import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { delay } from '../../common/util';

class PickAge extends Component {
  state = {
    isLoading: false,
    selection: '',
  };

  // selection is either 'adult' or 'child'
  chooseAge = selection => {
    const { store, reducers } = this.props.screenProps;

    const dose = store.leaflet.dosage[selection];

    Promise.resolve()
      .then(() => this.setState({ isLoading: true }))
      .then(() =>
        this.setState({ selection: selection === 'adults' ? 'adult' : 'child' })
      )
      .then(selection => reducers.setDose(dose))
      .then(() => delay(2000))
      .then(() => this.props.navigation.navigate('Dosage'))
      .catch(error => console.log({ error }));
  };

  render() {
    const { isLoading, selection } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/background.jpg')}
          style={styles.backgroundImage}
        />
        <Text style={styles.text}>
          {isLoading
            ? `So you are a ${selection}!`
            : 'Are you an adult or a child?'}
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.headContainer}
              onPress={() => this.chooseAge('adults')}
            >
              <Text style={styles.head}>👨🏼</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headContainer}
              onPress={() => this.chooseAge('children')}
            >
              <Text style={styles.head}>👧🏽</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default PickAge;

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
  text: {
    fontSize: 28,
    color: '#fff',
    marginVertical: 30,
  },
  headContainer: {
    // flex: 1,
    padding: 20,
  },
  head: {
    fontSize: 100,
  },
});
