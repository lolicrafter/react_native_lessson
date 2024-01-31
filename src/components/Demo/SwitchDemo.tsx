import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';

import {useState} from 'react';
// import {Switch} from 'react-native';

import {Switch} from '@rneui/themed';

function SwitchDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <StyledSafeAreaView>
      <StyledText className={'text-2xl'}>Switch</StyledText>
      <StyledView className={'m-[20] bg-lime-300 flex-row'}>
        <StyledText className={'text-xl'}>Switch</StyledText>
        <Switch
          value={checked}
          onValueChange={value => setChecked(value)}
          disabled={false}
          // color={'#8a1332'}
          trackColor={{false: '#b384e1', true: '#81b0ff'}}
          thumbColor={checked ? '#f5dd4b' : '#229d22'}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default SwitchDemo;
