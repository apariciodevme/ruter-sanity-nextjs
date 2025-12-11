import localFont from 'next/font/local';

export const myFont = localFont({
  src: [
    {
      path: '../public/fonts/TIDUI-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/TIDUI-Regular.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-myfont',
});