import React from 'react';
import {
  StyledText,
  StyledTouchableOpacity,
} from '@/components/NativeWindComponent';
import {Icon} from '@rneui/themed';

type IReactComponent = React.FC | React.ComponentClass | React.ComponentType;

export default <T extends IReactComponent>(
  OriginView: T,
  {title, callback}: {title?: string; callback?: () => void} = {},
): T => {
  const HocComponent = (props: any) => {
    return (
      <>
        <OriginView {...props} />
        <StyledTouchableOpacity
          onPress={() => {
            console.log('高阶组件click');
            callback && callback();
          }}
          className={'absolute bottom-[60] left-[30]'}>
          <Icon
            type={'antdesign'}
            name="pluscircle"
            size={50}
            color={'#a93e3e'}
            // color={'#0ea5ee'}
          />
          <StyledText className={'text-xl text-center'}>
            {title ?? '高阶组件'}
          </StyledText>
        </StyledTouchableOpacity>
      </>
    );
  };
  return HocComponent as T;
};
