import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '@/components/NativeWindComponent';
import {Icon} from '@rneui/themed';
import AddAccount from '@/components/AddAccount';
import {MutableRefObject, useEffect, useRef} from 'react';
import {UseAddAccountStore} from '@/stores';
import {useProxy} from 'valtio/utils';

interface IAddAccount {
  open(): void;

  close(): void;
}

export interface IAddAccountProps {
  mRef: MutableRefObject<IAddAccount | undefined>;
}

function Title() {
  return (
    <StyledView
      className={'flex justify-center items-center bg-rose-500 py-[10]'}>
      <StyledText className={'text-[24px] font-bold bg-blue-300'}>
        账号管理
      </StyledText>
    </StyledView>
  );
}

function Home() {
  const addAccountRef = useRef<IAddAccount>();
  const {type, accounts, StringifyAccounts, initialAccounts} =
    useProxy(UseAddAccountStore);

  useEffect(() => {
    initialAccounts();
    console.log(
      '%c--🚀🚀🚀🚀🚀------Home.tsx---注释所在行数40----😊===》',
      'color: red;font-size:x-large',
      accounts,
    );
  }, [StringifyAccounts]);

  // console.log(
  //   '%c--🚀🚀🚀🚀🚀------Home.tsx---注释所在行数47----accounts😊===》',
  //   'color: red;font-size:x-large',
  //   accounts,
  // );

  return (
    <StyledView className={'w-full h-full bg-lime-300'}>
      <Title />
      <StyledText className={'text-[24px] font-bold bg-blue-300'}>
        {type}
      </StyledText>
      <StyledTouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          console.log('点击了');
          addAccountRef?.current?.open();
        }}
        className={'absolute right-[30] bottom-[60]'}>
        <Icon
          type={'antdesign'}
          name="pluscircle"
          size={50}
          color={'#0ea5ee'}
        />
      </StyledTouchableOpacity>
      <AddAccount mRef={addAccountRef} />
    </StyledView>
  );
}

export default Home;
