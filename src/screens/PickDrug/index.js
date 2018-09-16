import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ActivityIndicator } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

import Picker from '../../components/Picker';

import { getLeaflet } from '../../api';
import { delay } from '../../common/util';

class PickDrug extends Component {
  state = {
    isLoading: false,
  };

  apiCall = () => {
    const { store, reducers } = this.props.screenProps;

    Promise.resolve()
      .then(() => this.setState({ isLoading: true }))
      .then(() => {
        const matches = store.pickedDrug.match(/^(.+)_/);
        if (matches.length > 1) {
          getLeaflet(matches[1]);
        }
      })
      .then(leaflet => reducers.setLeaflet(leaflet))
      .then(() => delay(2000))
      .then(() => this.props.navigation.navigate('PickAge'))
      .catch(error => console.log({ error }));
  };

  render() {
    const { store, reducers } = this.props.screenProps;
    const { isLoading } = this.state;
    const data =
      store.drugs &&
      store.drugs.map((drug, idx) => ({
        key: idx,
        label: drug.title,
        value: `${drug.swissmedicIds[0] || 0}_${idx}`,
      }));

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/background.jpg')}
          style={styles.backgroundImage}
        />
        <Text style={styles.text}>
          {isLoading
            ? 'Preparing medical assessment'
            : 'We found several results. Which one is correct?'}
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <View style={styles.center}>
            <Picker
              data={data}
              onConfirm={reducers.setPickedDrug}
              pickedValue={store.pickedDrug}
            />
            <RkButton onPress={this.apiCall}>Make Selection</RkButton>
          </View>
        )}
      </View>
    );
  }
}

export default PickDrug;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
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
    marginTop: 30,
    marginBottom: 20,
  },
});
