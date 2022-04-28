import React, { Key } from 'react';
import Prism, { Token as PrismToken, Grammar } from 'prismjs';
import normalizeTokens from '@lib/NormalizeTokens';
import { themeToDict } from '@lib/HelperFunctions';
import { HighlightThemeType } from '@lib/themes/HighlightTheme';
import { CodeLanguage } from '@state/slices/editor/ToolbarEditorCustomization.slice';

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type LineInputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className?: string;
  line: Token[];
  [key: string]: any;
};

export type LineOutputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className: string;
  [key: string]: any;
};

export type TokenInputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className?: string;
  token: Token;
  [key: string]: any;
};

export type TokenOutputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className: string;
  children: string;
  [key: string]: any;
};

export type RenderProps = {
  tokens: Token[][];
  className: string;
  style: HighlightThemeType;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};

interface CodeHighlightingProps {
  code: string;
  theme?: HighlightThemeType;
  language: string;
  children?: (props: RenderProps) => React.ReactNode;
}

export const CodeHighlighting: React.FC<CodeHighlightingProps> = (props) => {
  const { code, language, theme, children } = props;

  const getThemeDict = (): HighlightThemeType => {
    const newThemeDict = theme ? themeToDict(theme, language) : null;
    return newThemeDict;
  };

  const getLineProps = ({ key, className, style, line, ...rest }: LineInputProps): LineOutputProps => {
    const output: LineOutputProps = {
      ...rest,
      className: 'token-line',
      style: null,
      key: null,
    };

    const locThemeDict = getThemeDict();
    if (locThemeDict && locThemeDict.plain) {
      output.style = locThemeDict.plain;
    }

    if (style !== null) {
      output.style = output.style !== null ? { ...output.style, ...style } : style;
    }

    if (key !== null) {
      output.key = key;
    }
    if (className) {
      output.className += ` ${className}`;
    }
    return output;
  };

  const getStyleForToken = ({ types, empty }: Token) => {
    const typesSize = types.length;

    if (typesSize === 1 && types[0] === 'plain') return empty ? { display: 'inline-block' } : null;

    const baseStyle = empty ? { display: 'inline-block' } : {};
    return Object.assign(baseStyle);
  };

  const getTokenProps = ({ key, className, style, token, ...rest }: TokenInputProps): TokenOutputProps => {
    const output: TokenOutputProps = {
      ...rest,
      className: `token ${token.types.join(' ')}`,
      children: token.content,
      style: getStyleForToken(token),
      key: null,
    };
    if (style !== null) {
      output.style = output.style !== null ? { ...output.style, ...style } : style;
    }

    if (key !== null) output.key = key;
    if (className) output.className += ` ${className}`;
    return output;
  };

  const tokenize = (code: string, grammar: Grammar, language: string): Array<PrismToken | string> => {
    const env = {
      code,
      grammar,
      language,
      tokens: [],
    };

    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, Prism.languages.javascript);
    Prism.hooks.run('after-tokenize', env);

    return env.tokens;
  };

  return children({
    tokens: normalizeTokens(tokenize(code, Prism.languages[language], language)),
    className: `prism-code language-${language}`,
    style: getThemeDict(),
    getLineProps,
    getTokenProps,
  });
};
