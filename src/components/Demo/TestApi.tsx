import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
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

  console.log(
    '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数24----Platform.OS😊===》',
    'color: red;font-size:x-large',
    Platform.OS,
    Platform.Version,
    // Platform.constants,
    // Platform.isTV,
  );

  const styles = StyleSheet.create({
    container: {
      marginTop: Platform.select({
        ios: 20,
        android: 10,
        default: 0,
      }),
    },
  });
  console.log(
    '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数40----😊styles===》',
    'color: red;font-size:x-large',
    styles,
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
            console.log(
              '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
              'color: red;font-size:x-large',
              '测试日志',
            );
            // if (Linking.canOpenURL('https://www.baidu.com')) {
            //   Linking.openURL('https://www.baidu.com');
            // }
            // Linking.openURL('geo:30.684847,120.148386');
            // Linking.openURL('tel:10086');
            // Linking.openURL('sms:10086');
            // Linking.openURL('mailto:support@expo.io');
            // Linking.sendIntent('com.android.camera', {});
            void Linking.openSettings();
          }}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default TestApi;
