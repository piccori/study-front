import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        // Button Color
        tomato: '#FF6347',
        white: '#FFFFFF',
        // Background Color
        ghostWhite: '#F8F8FF',
        lavender: '#E6E6FA',
        whiteSmoke: '#F5F5F5',
        // Font Color
        darkSlateGray: '#2F4F4F',
        dimGray: '#696969',
        darkGray: '#A9A9A9',
      },
      space: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      fontSizes: {
        1: '0.75rem',
        2: '0.875rem',
        3: '1rem',
        4: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
      },
      fonts: {
        notoSansJp: 'Noto Sans JP', // 本文用のフォント
        hiraginoSans: 'Hiragino Sans', // 本文用のフォント
        mPlusRounded1c: 'M PLUS Rounded 1c', // ボタン用のフォント
        yuGothic: 'Yu Gothic', // メニュー用のフォント
        sourceHanSans: 'Source Han Sans', // 見出し用のフォント
      },
      fontWeights: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeights: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
      },
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  })