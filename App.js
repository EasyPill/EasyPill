import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './src/navigation';

import { initTheme } from './src/common/theme';

// import { WalkthroughScreen } from './src/screens/walkthroughs';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <WalkthroughScreen />
//       </View>
//     );
//   }
// }

export default class App extends React.Component {
  state = {
    /**
     * Currently entered text in drug input field
     */
    drugName: '',
    /**
     * Drugs list from initial API call
     */
    drugs: [],
    /**
     * SwissmedicId of the picked drug from Picker after initial API call
     */
    pickedDrug: 0,
  };

  getReducers = () => ({
    setDrugName: drugName => this.setState({ drugName }),
    setDrugs: drugs => this.setState({ drugs }),
    setPickedDrug: pickedDrug => this.setState({ pickedDrug }),
  });

  componentWillMount() {
    initTheme();
  }

  render() {
    return (
      <RootStack
        screenProps={{ store: this.state, reducers: this.getReducers() }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
