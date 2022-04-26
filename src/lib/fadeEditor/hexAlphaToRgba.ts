import hexToRgba from './hexToRgba';
import isValidHex from './isValidHex';

interface IPicker {
  hex: string;
  alpha: number;
}

export default (picker: IPicker) => {
  if (picker) {
    if (isValidHex(`${picker.hex}`)) {
      const rgba = hexToRgba(picker.hex, picker.alpha);

      if (rgba) {
        return rgba;
      }
    }
  }

  return '';
};
