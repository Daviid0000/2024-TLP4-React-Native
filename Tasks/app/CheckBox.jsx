import React, { useState } from 'react';
import { CheckBox, Icon } from '@rneui/themed';
import { CheckBoxIcon } from "@rneui/base/dist/CheckBox/components/CheckBoxIcon";


const CheckboxComponent = () => {
  const [check1, setCheck1] = useState(false);

  return (
    <CheckBox
      center
      containerStyle={{backgroundColor:'transparent'}}
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
  );
};

export default CheckboxComponent;