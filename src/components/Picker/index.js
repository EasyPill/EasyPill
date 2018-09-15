import React, { Component } from 'react';
import { Picker as PickerRN } from 'react-native';

export default class Picker extends Component {
  render() {
    const { pickedValue, data } = this.props;
    return (
      <PickerRN
        selectedValue={pickedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(swissmedicId, itemIndex) => {
          // const swissmedicId = itemValue.length > 0 && itemValue[0];
          this.props.onConfirm(swissmedicId);
        }}
      >
        {data.map((drug, idx) => (
          <PickerRN.Item key={idx} label={drug.label} value={drug.value} />
        ))}
      </PickerRN>
    );
  }
}
