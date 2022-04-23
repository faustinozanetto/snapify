import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from 'react-color';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorBackgroundColorProps {}

export const EditorBackgroundColor: React.FC<
  EditorBackgroundColorProps
> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  return (
    <Flex width='full'>
      <SketchPicker
        color={backgroundCustomization.backgroundColor}
        onChange={(color) =>
          dispatch(setBackgroundCustomization({ backgroundColor: color.hex }))
        }
      />
    </Flex>
  );
};
