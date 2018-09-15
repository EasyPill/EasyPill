import { createStackNavigator } from 'react-navigation';
import SearchDrug from '../screens/SearchDrug';
import PickDrug from '../screens/PickDrug';

export default createStackNavigator(
  {
    SearchDrug: SearchDrug,
    PickDrug: PickDrug,
  },
  {
    initialRouteName: 'SearchDrug',
  }
);
