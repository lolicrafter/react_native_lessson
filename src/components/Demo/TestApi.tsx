import {
  StyledSafeAreaView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '../NativeWindComponent';
import {
  Alert,
  Keyboard,
  // PermissionsAndroid,
  // BackHandler,
  // Linking,
  Platform,
  StyleSheet,
  ToastAndroid,
  useWindowDimensions,
  Vibration,
} from 'react-native';
import {Button} from '@rneui/themed';
// import {useEffect} from 'react';
import {useBackHandler, useKeyboard} from '@react-native-community/hooks';

const KeyboardComponent = () => {
  const keyboard = useKeyboard();
  console.debug('keyboard isKeyboardShow: ', keyboard.keyboardShown);
  // console.log('keyboard keyboardHeight: ', keyboard.keyboardHeight);
  return <StyledTextInput value={'Hello World'} className={'border-2'} />;
};

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

  useBackHandler(() => {
    console.log(
      '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数56----😊===》',
      'color: red;font-size:x-large',
      '拦截返回',
    );
    return true;
  });

  return (
    <StyledSafeAreaView>
      <StyledView>
        <StyledText className={'text-2xl'}>Hello World</StyledText>
        <KeyboardComponent />
        <StyledView
          className={'bg-red-500 w-[150] h-[100] z-10'}
          style={{
            transform: [
              {translateX: 100},
              {translateY: 100},
              {scale: 1.5},
              {rotate: '45deg'},
              // {rotateX: '45deg'},
              // {rotateY: '45deg'},
              // {rotateZ: '45deg'},
              // {scaleX: 2},
              // {scaleY: 2},
              // {skewX: '45deg'},
              // {skewY: '45deg'},
            ],
          }}>
          <StyledText className={'text-2xl'}>Transform</StyledText>
        </StyledView>

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
                onPress: () => {
                  console.error('OK Pressed');
                  Vibration.cancel();
                },
              },
            ]);
          }}
        />
        <Button
          title={'测试日志'}
          containerStyle={{marginTop: 20, width: 100}}
          onPress={() => {
            Keyboard.dismiss();
            ToastAndroid.show('测试日志', ToastAndroid.LONG);
            // ToastAndroid.showWithGravity('测试日志', ToastAndroid.LONG, 1);
            // Vibration.vibrate([0, 500, 500, 300], true);
            // console.log(
            //   '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //   'color: red;font-size:x-large',
            //   '测试日志',
            // );
            // if (Linking.canOpenURL('https://www.baidu.com')) {
            //   Linking.openURL('https://www.baidu.com');
            // }
            // Linking.openURL('geo:30.684847,120.148386');
            // Linking.openURL('tel:10086');
            // Linking.openURL('sms:10086');
            // Linking.openURL('mailto:support@expo.io');
            // Linking.sendIntent('com.android.camera', {});
            // void Linking.openSettings();
            // BackHandler.exitApp();
            // PermissionsAndroid.check('android.permission.CAMERA').then(res => {
            //   console.log(
            //     '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //     'color: red;font-size:x-large',
            //     res,
            //   );
            //   if (res) {
            //     console.log(
            //       '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //       'color: red;font-size:x-large',
            //       '有权限',
            //     );
            //   } else {
            //     console.log(
            //       '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //       'color: red;font-size:x-large',
            //       '没有权限',
            //     );
            //     PermissionsAndroid.requestMultiple([
            //       'android.permission.WRITE_EXTERNAL_STORAGE',
            //       'android.permission.CAMERA',
            //     ]).then(res => {
            //       console.log(
            //         '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //         'color: red;font-size:x-large',
            //         res,
            //       );
            //       if (res === 'granted') {
            //         console.log(
            //           '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //           'color: red;font-size:x-large',
            //           '有权限',
            //         );
            //       } else {
            //         console.log(
            //           '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数73----😊===》',
            //           'color: red;font-size:x-large',
            //           '没有权限',
            //         );
            //       }
            //     });
            //   }
            // });
          }}
        />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default TestApi;
