import { lighten, darken } from 'polished';

const danger = {
  main: '#d42222',
  light: lighten('0.02', '#d42222'),
  dark: darken('0.1', '#d42222')
};

const warning = {
  main: '#d4ca22',
  light: lighten('0.02', '#d4ca22'),
  dark: darken('0.1', '#d4ca22')
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
    danger,
    warning
  },
  dark: {
    main: {
      1: lighten('0.06', '#080808'),
      2: '#080808',
      3: lighten('0.1', '#080808'),
      4: lighten('0.12', '#080808'),
      shadow: darken('0.1', '#080808')
    },
    contrast: {
      1: '#e9e9e9',
      2: darken('0.4', '#e9e9e9'),
      3: darken('0.5', '#e9e9e9'),
      4: darken('0.75', '#e9e9e9')
    },
    danger,
    warning
  }
};

export const color = {
  green: {
    main: '#12c450',
    light: lighten('0.02', '#12c450'),
    dark: darken('0.1', '#12c450')
  },
  turquoise: {
    main: '#12d0ae',
    light: lighten('0.02', '#12d0ae'),
    dark: darken('0.1', '#12d0ae')
  },
  blue: {
    main: '#158de8',
    light: lighten('0.02', '#158de8'),
    dark: darken('0.1', '#158de8')
  },
  purple: {
    main: '#9a60ed',
    light: lighten('0.02', '#9a60ed'),
    dark: darken('0.1', '#9a60ed')
  },
  fuchsia: {
    main: '#e8158c',
    light: lighten('0.02', '#e8158c'),
    dark: darken('0.1', '#e8158c')
  },
  red: {
    main: '#f31717',
    light: lighten('0.02', '#f31717'),
    dark: darken('0.1', '#f31717')
  },
  orange: {
    main: '#de9d2b',
    light: lighten('0.02', '#de9d2b'),
    dark: darken('0.1', '#de9d2b')
  }
};
