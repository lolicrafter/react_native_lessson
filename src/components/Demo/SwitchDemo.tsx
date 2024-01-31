import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';

import {useState} from 'react';
import {Switch} from '@rneui/themed';

function SwitchDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <StyledSafeAreaView>
      <StyledText className={'text-2xl'}>Switch</StyledText>
      <StyledView className={'p-[20]'}>
        <Switch
          value={checked}
          onValueChange={value => setChecked(value)}
          disabled={false}
          color={'#6ca158'}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default SwitchDemo;
