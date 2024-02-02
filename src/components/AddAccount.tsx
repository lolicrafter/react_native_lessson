import React, {useImperativeHandle, useMemo} from 'react';
import {
  StyledKeyboardAvoidingView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from './NativeWindComponent';
import {Modal} from 'react-native';
import {IAddAccountProps} from '@/modules/Home';
import {Icon} from '@rneui/themed';
import {useProxy} from 'valtio/utils';
import {osStore, UseAddAccountStore} from '@/stores';

function AddAccount(props: IAddAccountProps) {
  const {os} = useProxy(osStore);
  console.log(
    '%c--🚀🚀🚀🚀🚀------AddAccount.tsx---注释所在行数17----😊os===》',
    'color: red;font-size:x-large',
    os,
  );

  const behavior = os === 'ios' ? 'height' : 'padding';

  useImperativeHandle(props.mRef, () => ({
    open: () => {
      setVisible(true);
    },
    close: () => {
      setVisible(false);
    },
  }));
  const [visible, setVisible] = React.useState(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType={'fade'}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <StyledKeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        behavior={behavior}
        className={
          'w-full h-full flex justify-center items-center bg-[#00000060]'
        }>
        <StyledView className={'w-4/5 p-[16]  bg-white rounded'}>
          <RenderTitle setVisible={setVisible} />
          <RenderType />
          <RenderName />
          <RenderAccount />
          <RenderPassword />
          <RenderSubmit />
        </StyledView>
      </StyledKeyboardAvoidingView>
    </Modal>
  );
}

function RenderSubmit() {
  const {submit} = useProxy(UseAddAccountStore);

  const ButtonComponent = useMemo(() => {
    return (
      <StyledTouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          submit();
        }}
        className={
          'mt-[20] mb-[10]  rounded-lg bg-blue-500 h-[44]  flex justify-center items-center'
        }>
        <StyledText className={'text-white text-[20px]'}>保 存</StyledText>
      </StyledTouchableOpacity>
    );
  }, [submit]);
  return <>{ButtonComponent}</>;
}

function RenderPassword() {
  const {password, setPassword} = useProxy(UseAddAccountStore);
  return (
    <StyledView className={'mt-[10]'}>
      <StyledText>密码</StyledText>
      <StyledView className={'  mt-[8]'}>
        <StyledTextInput
          value={password}
          onChangeText={text => {
            console.log('onChangeText', text);
            setPassword(text);
          }}
          placeholder={'请输入密码'}
          maxLength={20}
          className={
            'h-[40] text-[16px] border border-solid border-stone-400 rounded bg-[#f5f5f5] px-[10]'
          }
        />
      </StyledView>
    </StyledView>
  );
}

function RenderAccount() {
  const {account, setAccount} = useProxy(UseAddAccountStore);
  return (
    <StyledView className={'mt-[10]'}>
      <StyledText>账号</StyledText>
      <StyledView className={'  mt-[8]'}>
        <StyledTextInput
          value={account}
          onChangeText={text => {
            console.log('onChangeText', text);
            setAccount(text);
          }}
          placeholder={'请输入账号'}
          maxLength={20}
          className={
            'h-[40] text-[16px] border border-solid border-stone-400 rounded bg-[#f5f5f5] px-[10]'
          }
        />
      </StyledView>
    </StyledView>
  );
}

function RenderName() {
  const {name, setName} = useProxy(UseAddAccountStore);
  return (
    <StyledView className={'mt-[10]'}>
      <StyledText>账号名称</StyledText>
      <StyledView className={'  mt-[8]'}>
        <StyledTextInput
          value={name}
          onChangeText={text => {
            console.log('onChangeText', text);
            setName(text);
          }}
          placeholder={'请输入账号名称'}
          maxLength={20}
          className={
            'h-[40] text-[16px] border border-solid border-stone-400 rounded bg-[#f5f5f5] px-[10]'
          }
        />
      </StyledView>
    </StyledView>
  );
}

function RenderTitle({setVisible}: {setVisible: (visible: boolean) => void}) {
  return (
    <StyledView className={'flex justify-center items-center'}>
      <StyledText className={'text-xl'}>账号管理</StyledText>
      <StyledView className={'absolute right-[10] '}>
        <Icon
          type={'antdesign'}
          name="closecircle"
          size={30}
          color={'#7398a6'}
          onPress={() => {
            setVisible(false);
          }}
        />
      </StyledView>
    </StyledView>
  );
}

function RenderType() {
  const typeList = ['游戏', '平台', '银行', '其他'];
  const {type, setType} = useProxy(UseAddAccountStore);
  return (
    <StyledView className={'mt-[20]'}>
      <StyledText>账号类型</StyledText>
      <StyledView className={' h-[32] flex-row items-center mt-[8]'}>
        {typeList.map((item: string, index: number) => {
          return (
            <StyledTouchableOpacity
              key={index}
              onPress={() => {
                setType(item);
              }}
              className={` h-full flex-1 flex justify-center items-center border border-solid border-stone-400 + ${
                index === 0 ? 'rounded-l' : 'border-l-0'
              } + ${index === 3 ? 'rounded-r' : ''} + ${
                type === item ? 'bg-blue-500 ' : ''
              } }`}>
              <StyledText
                className={`${
                  type === item ? 'border-blue-500 text-white' : ''
                }`}>
                {item}
              </StyledText>
            </StyledTouchableOpacity>
          );
        })}
      </StyledView>
    </StyledView>
  );
}

export default React.memo(AddAccount);
