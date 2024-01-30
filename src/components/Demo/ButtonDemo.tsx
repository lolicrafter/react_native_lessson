import {SafeAreaView} from 'react-native';
import {StyledButton, StyledText, StyledView} from '../NativeWindComponent';

function ButtonDemo() {
  return (
    <SafeAreaView>
      <StyledView className={'h-screen w-screen bg-lime-300 p-[20px]'}>
        <StyledText className={'text-4xl'}>Button Demo</StyledText>
        <StyledButton
          onPress={() => {
            console.log('onPress');
          }}
          className={'w-[100] h-[50]'}
          color={'#96fa9a'}
          title={'Button'}
        />
      </StyledView>
    </SafeAreaView>
  );
}

export default ButtonDemo;
