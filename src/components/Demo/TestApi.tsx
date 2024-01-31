import {
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {
  Alert,
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
import {useBackHandler} from '@react-native-community/hooks';

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
  // const backAndroidHandler = () => {
  //   console.log(
  //     '%c--🚀🚀🚀🚀🚀------TestApi.tsx---注释所在行数56----😊===》',
  //     'color: red;font-size:x-large',
  //     '拦截返回',
  //   );
  //   return true;
  // };
  //
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAndroidHandler);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', backAndroidHandler);
  //   };
  // }, []);
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
