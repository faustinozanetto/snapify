import React from 'react';
import { Box, HStack, Select, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExportCustomization, setExportCustomization } from '@state/slices/editor/editorCustomization.slice';
import { FileExtension } from 'snappy.types';

interface EditorToolbarExportImageExtensionProps {}

const EditorToolbarExportImageExtension: React.FC<EditorToolbarExportImageExtensionProps> = ({}) => {
  const dispatch = useDispatch();
  const exportCustomization = useSelector(selectExportCustomization);

  const handleFilexExtensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setExportCustomization({ fileExtension: event.target.value as FileExtension }));
  };
  return (
    <Box pb={2} width="full">
      <HStack justifyContent="space-between" width="full">
        <Text as="h2" fontWeight={600} fontSize="lg" mb={2}>
          File Extension
        </Text>
      </HStack>
      <Select
        placeholder="Select Extension"
        onChange={handleFilexExtensionChange}
        defaultValue={exportCustomization.fileExtension}
        variant="filled"
        borderRadius="none"
      >
        {/* Map FileExtension values */}
        {Object.values(FileExtension).map((extension: string) =>
          extension !== 'blob' ? (
            <option key={extension} value={extension}>
              {extension}
            </option>
          ) : null
        )}
      </Select>
    </Box>
  );
};
export default EditorToolbarExportImageExtension;
