import { RkTheme } from 'react-native-ui-kitten';

export const initTheme = () => {
  RkTheme.setType('RkButton', 'icon', {
    fontSize: 24,
    width: 46,
    borderRadius: 25,
    hitSlop: { top: 5, left: 5, bottom: 5, right: 5 },
  });
};
