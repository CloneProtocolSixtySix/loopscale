import localFont from 'next/font/local'

export const altform = localFont({
  src: [
    {
      path: '../../public/fonts/altform-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/altform-lightitalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/altform-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/altform-regularitalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/altform-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/altform-semibolditalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-altform',
  display: 'swap',
}) 