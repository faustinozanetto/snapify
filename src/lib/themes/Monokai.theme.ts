import { CodeTheme } from 'snappy.types';
import { HighlightTheme } from 'snappy.types';

export const MONOKAI: HighlightTheme = {
  name: 'Monokai',
  type: CodeTheme.MONOKAI,
  plain: {
    color: '#f8f8f2',
    backgroundColor: '#272822',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(136, 132, 111)',
      },
    },
    {
      types: ['string', 'changed'],
      style: {
        color: 'rgb(230, 219, 116)',
      },
    },
    {
      types: ['punctuation', 'tag', 'deleted'],
      style: {
        color: 'rgb(249, 38, 114)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#F92672',
      },
    },
    {
      types: ['number', 'builtin'],
      style: {
        color: 'rgb(174, 129, 255)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(248, 248, 242)',
      },
    },
    {
      types: ['function', 'attr-name', 'inserted'],
      style: {
        color: 'rgb(166, 226, 46)',
      },
    },
  ],
};
