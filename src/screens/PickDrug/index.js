import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Picker from '../../components/Picker';

const PickDrug = props => {
  const { store, reducers } = props.screenProps;
  const data = store.drugs.map((drug, idx) => ({
    key: idx,
    label: drug.title,
    value: drug.swissmedicIds[0] || 0,
  }));
  return (
    <View style={styles.container}>
      <Picker
        data={data}
        onConfirm={reducers.setPickedDrug}
        pickedValue={store.pickedDrug}
      />
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
