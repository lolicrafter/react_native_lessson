import React, {MutableRefObject, useImperativeHandle} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {StyledView} from '@/components/NativeWindComponent';

export interface DeleteModalProps {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

interface IOpenDeleteModalProps {
  open(data?: DeleteModalProps): void;

  close(): void;
}

export interface IOpenDeleteModalRefProps {
  mRef: MutableRefObject<IOpenDeleteModalProps | undefined>;
}

const DeleteModal = IOpenDeleteModalRefProps => {
  const [isVisible, setVisible] = React.useState(false);
  const [deleteModalProps, setDeleteModalProps] =
    React.useState<DeleteModalProps>({
      title: '',
      content: '',
      onConfirm: () => {},
      onCancel: () => {},
    });
  const {title, content, onConfirm, onCancel} = deleteModalProps;
  useImperativeHandle(IOpenDeleteModalRefProps.mRef, () => ({
    open: (data?: DeleteModalProps) => {
      setVisible(true);
      if (data) {
        setDeleteModalProps(data);
      }
    },
    close: () => {
      setVisible(false);
    },
  }));
  return (
    <Modal visible={isVisible} transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width: '80%',
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
          <StyledView className={'flex-row basis-7/12  items-center   py-[10]'}>
            <Text
              style={{
                fontSize: 18,
              }}>
              {content}
            </Text>
          </StyledView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={onCancel} style={{marginRight: 20}}>
              <Text style={{fontSize: 16, color: 'blue'}}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm}>
              <Text style={{fontSize: 16, color: 'red'}}>删除</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
