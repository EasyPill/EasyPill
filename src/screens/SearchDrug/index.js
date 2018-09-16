import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { getDrugs } from '../../api';

import Search from '../../components/Search';

class SearchDrug extends React.Component {
  pickDrug = drug => this.setState({ pickedDrug: drug });

  runDrugsQuery = () => {
    const { store, reducers } = this.props.screenProps;
    Promise.resolve()
      .then(() => getDrugs(store.drugName))
      .then(drugs => reducers.setDrugs(drugs))
      .then(() => this.props.navigation.navigate('PickDrug'))
      .catch(error => console.log('Error in runDrugsQuery', error));
  };

  render() {
    const { store, reducers } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/background.jpg')}
          style={styles.backgroundImage}
        />
        <Search
          onButtonPress={this.runDrugsQuery}
          onTypeCharacter={name => reducers.setDrugName(name)}
        />
      </View>
    );
  }
}

export default SearchDrug;

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
});
