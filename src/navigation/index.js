import { createStackNavigator } from 'react-navigation';
import SearchDrug from '../screens/SearchDrug';
import PickDrug from '../screens/PickDrug';
import PickAge from '../screens/PickAge';
import Dosage from '../screens/Dosage';

export default createStackNavigator(
  {
    SearchDrug: SearchDrug,
    PickDrug: PickDrug,
    PickAge: PickAge,
    Dosage: Dosage,
  },
  {
    initialRouteName: 'SearchDrug',
  }
);
