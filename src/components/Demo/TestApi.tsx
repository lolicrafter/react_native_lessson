import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {Alert, useWindowDimensions} from 'react-native';
import {Button} from '@rneui/themed';

function TestApi() {
  const {width, height, scale, fontScale} = useWindowDimensions();
  console.log(
    '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数12----😊===》',
    'color: red;font-size:x-large',
    width,
    height,
  );
  console.log(
    '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数17----😊===》',
    'color: red;font-size:x-large',
    scale,
    fontScale,
  );
  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledText className={'text-2xl'}>Hello World</StyledText>
        <Button
          containerStyle={{marginTop: 20, width: 100}}
          title={'Click Me'}
          onPress={() => {
            Alert.alert('Hello World', 'This is an alert.', [
              {
                text: '取消',
                onPress: () => console.warn('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: '确定',
                onPress: () => console.error('OK Pressed'),
              },
            ]);
          }}
        />
        <Button
          title={'测试日志'}
          containerStyle={{marginTop: 20, width: 100}}
          onPress={() => {
            //
          }}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default TestApi;
