import React, {useRef} from 'react';
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '@/components/NativeWindComponent';
import {StyleSheet} from 'react-native';
import {Button, Icon} from '@rneui/themed';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

function VisionCamera() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>();

  const takePhoto = async () => {
    const photo: PhotoFile = await camera.current?.takePhoto();
    console.log(photo);
    await CameraRoll.saveAsset(`file://${photo.path}`, {
      type: 'photo',
    });
  };
  console.log(
    '%c--🚀🚀🚀🚀🚀------VisionCamera.tsx---注释所在行数14----😊=hasPermission==》',
    'color: red;font-size:x-large',
    hasPermission,
  );
  if (!hasPermission) {
    return <Button title={'请求相机权限'} onClick={requestPermission} />;
  }

  if (!device) {
    return <StyledText>没有设备...</StyledText>;
  }

  return (
    <StyledView style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camera}
        device={device!}
        photo={true}
        isActive={true}
      />
      <StyledTouchableOpacity
        onPress={() => {
          takePhoto();
        }}
        className={'absolute bottom-[60] left-[180]'}>
        <Icon
          type={'antdesign'}
          name="pluscircle"
          size={50}
          color={'#4093b2'}
          // color={'#0ea5ee'}
        />
        <StyledText className={'text-xl text-center'}>拍照</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default VisionCamera;
