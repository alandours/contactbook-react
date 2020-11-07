import { lighten, darken } from 'polished';

const danger = {
  main: '#d42222',
  light: lighten('0.02', '#d42222'),
  dark: darken('0.1', '#d42222')
};

export const palette = {
  light: {
    main: {
      1: '#ffffff',
      2: darken('0.02', '#ffffff'),
      3: darken('0.06', '#ffffff'),
      4: darken('0.15', '#ffffff'),
      shadow: darken('0.15', '#ffffff')
    },
    contrast: {
      1: '#000000',
      2: lighten('0.45', '#000000'),
      3: lighten('0.6', '#000000'),
      4: lighten('0.78', '#000000')
    },
    danger
  },
  dark: {
    main: {
      1: lighten('0.03', '#080808'),
      2: '#080808',
      3: lighten('0.08', '#080808'),
      4: lighten('0.1', '#080808'),
      shadow: darken('0.02', '#080808')
    },
    contrast: {
      1: '#e9e9e9',
      2: darken('0.4', '#e9e9e9'),
      3: darken('0.5', '#e9e9e9'),
      4: darken('0.75', '#e9e9e9')
    },
    danger
  }
};

export const color = {
  green: {
    main: '#12c450',
    light: lighten('0.02', '#12c450'),
    dark: darken('0.1', '#12c450')
  },
  orange: {
    main: '#de9d2b',
    light: lighten('0.02', '#de9d2b'),
    dark: darken('0.1', '#de9d2b')
  },
  purple: {
    main: '#9a60ed',
    light: lighten('0.02', '#9a60ed'),
    dark: darken('0.1', '#9a60ed')
  }
};
