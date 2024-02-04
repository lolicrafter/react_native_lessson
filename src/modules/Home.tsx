import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '@/components/NativeWindComponent';
import {Icon, Switch} from '@rneui/themed';
import AddAccount from '@/components/AddAccount';
import {
  createContext,
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {IAccountItem, UseAddAccountStore} from '@/stores';
import {useProxy} from 'valtio/utils';
import {
  LayoutAnimation,
  SectionList,
  SectionListData,
  StyleSheet,
} from 'react-native';
import DeleteModal, {
  DeleteModalProps,
  IOpenDeleteModalRefProps,
} from '@/components/DeleteModal';

interface IAddAccount {
  open(data?: IAccountItem): void;

  close(): void;
}

export interface IAddAccountProps {
  mRef: MutableRefObject<IAddAccount | undefined>;
}

function Title() {
  const {showPassword} = useProxy(UseAddAccountStore);

  return (
    <StyledView
      className={'flex justify-center items-center bg-rose-500 py-[10]'}>
      <StyledText className={'text-[24px] font-bold bg-blue-300'}>
        账号管理
      </StyledText>
      <StyledView className={'absolute right-[20]'}>
        <Switch
          thumbColor={showPassword ? '#0ea5ee' : '#f4f3f4'}
          trackColor={{false: '#767577', true: '#0ea5ee'}}
          value={showPassword}
          onValueChange={v => (UseAddAccountStore.showPassword = v)}
        />
      </StyledView>
    </StyledView>
  );
}

const RenderItem = ({item}: {item: IAccountItem}) => {
  const {addAccountRef, removeModalRef} = useContext(AddAccountRefContext);

  const {activeType, showPassword} = useProxy(UseAddAccountStore);
  if (item.type !== activeType) {
    return null;
  }
  const onConfirm = () => {
    if (item.id) {
      UseAddAccountStore.removeAccount(item.id);
    }
    removeModalRef?.current?.close();
  };

  return (
    <StyledTouchableOpacity
      onPress={() => {
        console.log('长按了', item.account);
        addAccountRef?.current?.open(item);
      }}
      onLongPress={() => {
        LayoutAnimation.easeInEaseOut();
        removeModalRef?.current?.open({
          title: '删除账号?',
          content: `是否确定删除账号：${item.account}`,
          onConfirm,
        } as DeleteModalProps);
      }}
      className={'bg-white p-[10] border-t border-box border-slate-300'}>
      <StyledText className={'text-[18px] font-bold'}>{item.name}</StyledText>
      <StyledView className={'flex-row items-center mt-[10]'}>
        <StyledText className={'text-[16px] flex-1 text-stone-500'}>
          账号： {item.account}
        </StyledText>
        <StyledText className={'text-[16px] flex-1 text-stone-500'}>
          密码： {showPassword ? item.password : '******'}
        </StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

const HeaderIcon = ({type}: {type: string}) => {
  switch (type) {
    case '游戏':
      return (
        <Icon
          type={'entypo'}
          name={'game-controller'}
          size={30}
          color={'#0ea5ee'}
        />
      );
    case '平台':
      return (
        <Icon
          type={'font-awesome'}
          name={'building'}
          size={30}
          color={'#0ea5ee'}
        />
      );
    case '银行':
      return (
        <Icon type={'antdesign'} name={'bank'} size={30} color={'#0ea5ee'} />
      );
    case '其他':
      return (
        <Icon
          type={'material-community'}
          name={'more'}
          size={30}
          color={'#0ea5ee'}
        />
      );
    default:
      return (
        <Icon type={'antdesign'} name={'user'} size={30} color={'#0ea5ee'} />
      );
  }
};

const ArrowIcon = ({type}: {type: string}) => {
  const {activeType, setActiveType} = useProxy(UseAddAccountStore);
  return (
    <StyledTouchableOpacity
      className={'p-[10]'}
      onPress={() => {
        LayoutAnimation.easeInEaseOut();
        setActiveType(type);
      }}>
      <Icon
        type={'antdesign'}
        // name={`${activeType === type ? 'down' : 'right'}`}
        name={'down'}
        size={20}
        color={'#0ea5ee'}
        style={{
          transform: [{rotate: activeType === type ? '0deg' : '-90deg'}],
        }}
      />
    </StyledTouchableOpacity>
  );
};

const RenderHeader = ({section}: {section: SectionListData<IAccountItem>}) => {
  const {activeType} = useProxy(UseAddAccountStore);

  return (
    <StyledView
      className={`bg-white rounded-t-lg mt-[20] ${
        section.type !== activeType ? 'rounded-b-lg' : ''
      }`}>
      <StyledView className={'flex-row items-center justify-between p-[10]'}>
        <StyledView className={'flex-row items-center'}>
          <HeaderIcon type={section.type} />
          <StyledText className={'text-xl font-bold ml-[10]'}>
            {section.type}
          </StyledText>
        </StyledView>
        <ArrowIcon type={section.type} />
      </StyledView>
    </StyledView>
  );
};
const sectionStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    // backgroundColor: '#ffffff',
  },
});

function SectionListCom() {
  const {accounts, initialAccounts} = useProxy(UseAddAccountStore);
  useEffect(() => {
    initialAccounts();
  }, [initialAccounts]);
  /**
   * 根据accounts中的type字段，建立分组数据，格式为[{type: string, data: IAccountItem}]
   */
  const sectionListData = useMemo(() => {
    return accounts.reduce((prev, cur) => {
      const index = prev.findIndex(item => item.type === cur.type);
      if (index === -1) {
        prev.push({type: cur.type, data: [cur]});
      } else {
        prev[index].data.push(cur);
      }
      return prev;
    }, []) as {type: string; data: IAccountItem[]}[];
  }, [accounts]);
  return (
    <SectionList
      sections={sectionListData}
      keyExtractor={item => item.id}
      renderItem={RenderItem}
      renderSectionHeader={({section}) => <RenderHeader section={section} />}
      contentContainerStyle={sectionStyle.container}
    />
  );
}

interface AddAccountRefContextProps {
  removeModalRef: MutableRefObject<IOpenDeleteModalRefProps | undefined>;
  addAccountRef: MutableRefObject<IAddAccount | undefined>;
}

const AddAccountRefContext = createContext<
  AddAccountRefContextProps | undefined
>(undefined);

// const TestComponent = () => {
//   return (
//     <StyledView className={'h-[200] p-[30]'}>
//       <StyledView
//         className={'w-full h-[200]  justify-center items-center bg-white '}>
//         <StyledText>test</StyledText>
//       </StyledView>
//     </StyledView>
//   );
// };

function Home() {
  const addAccountRef = useRef<IAddAccount>();
  const removeModalRef = useRef<IOpenDeleteModalRefProps>();
  const handlePress = useCallback(() => {
    console.log('点击了');
    addAccountRef?.current?.open();
  }, [addAccountRef]);
  return (
    <AddAccountRefContext.Provider value={{addAccountRef, removeModalRef}}>
      <StyledView
        className={'w-full h-full'}
        style={{backgroundColor: '#d1d5db'}}>
        <Title />
        {/*<TestComponent />*/}
        <SectionListCom />
        <StyledTouchableOpacity
          activeOpacity={0.5}
          onPress={handlePress}
          className={'absolute right-[30] bottom-[60]'}>
          <Icon
            type={'antdesign'}
            name="pluscircle"
            size={50}
            // color={'#ffffff'}
            color={'#0ea5ee'}
          />
        </StyledTouchableOpacity>
      </StyledView>
      <AddAccount mRef={addAccountRef} />
      <DeleteModal mRef={removeModalRef} />
    </AddAccountRefContext.Provider>
  );
}

export default Home;
