import {SafeAreaView} from 'react-native';
import {StyledText, StyledTextInput, StyledView} from '../NativeWindComponent';
import {useState} from 'react';

function TextInputDemo() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView>
      <StyledView className={'h-screen w-screen bg-lime-300 p-[20px] '}>
        <StyledText className={'text-[24px] mb-10 font-bold'}>
          TextInputDemo组件展示
        </StyledText>
        <StyledText className={'text-[24px] mb-10'}>{text}</StyledText>
        <StyledTextInput
          onChangeText={e => {
            console.log(e);
            setText(e);
          }}
          defaultValue={'默认值'}
          // autoFocus={true}
          editable={true}
          multiline={true}
          // returnKeyType={'go'}
          // enterKeyHint={'search'}
          // maxLength={11}
          // selection={{start: 0, end: 2}}
          selectionColor={'red'}
          selectTextOnFocus={true}
          className={
            'bg-white p-[10px] rounded-[10px] text-[24px] font-bold text-rose-400 '
          }
        />
      </StyledView>
    </SafeAreaView>
  );
}

export default TextInputDemo;
