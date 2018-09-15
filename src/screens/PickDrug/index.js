import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';

import Picker from '../../components/Picker';

import { getLeaflet } from '../../api';

const PickDrug = props => {
  const { store, reducers } = props.screenProps;
  const data = store.drugs.map((drug, idx) => ({
    key: idx,
    label: drug.title,
    value: drug.swissmedicIds[0] || 0,
  }));

  const apiCall = () => {
    getLeaflet(store.pickedDrug);
  };

  return (
    <View style={styles.container}>
      <Picker
        data={data}
        onConfirm={reducers.setPickedDrug}
        pickedValue={store.pickedDrug}
      />
      <RkButton onPress={apiCall}>Search Dosis</RkButton>
    </View>
  );
};

export default PickDrug;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
