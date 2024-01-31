import {
  StyledButton,
  StyledPressable,
  StyledSafeAreaView,
  StyledText,
  StyledView,
} from '../NativeWindComponent';
import {Modal, StatusBar} from 'react-native';
import {useState} from 'react';
import SectionListDemo from './SectionListDemo';

function ModalDemo() {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <StyledSafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'rgba(0, 0, 0, 0.5)'}
        animated={true}
        translucent={true}
        hidden={false}
      />
      <StyledView className={'pt-[15px]'}>
        <StyledButton title={'Show Modal'} onPress={() => setVisible(true)} />
      </StyledView>
      <StyledText className={'text-2xl'}>Modal</StyledText>
      <StyledView className={'p-[10px]'}>
        <Modal
          visible={visible}
          onRequestClose={closeModal}
          onShow={() => {
            console.log('Modal onShow');
          }}
          transparent={true}
          statusBarTranslucent={true}
          animationType={'slide'}>
          <StyledPressable
            style={{height: '20%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            onPress={closeModal}
          />
          <StyledView className={'p-[10px]'} style={{height: '80%'}}>
            <SectionListDemo closeModal={closeModal} />
          </StyledView>
        </Modal>
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default ModalDemo;
