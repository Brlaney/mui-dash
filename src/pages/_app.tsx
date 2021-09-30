import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@/lib/config/cache/createEmotionCache';
import theme from '@/lib/config/mui-theme/theme';
import useTranslation from 'next-translate/useTranslation';

import '@/styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
};

export default function MyApp(props: MyAppProps) {
  const { t } = useTranslation('common');
  const keywords = t('keywords');
  const description = t('description');
  const title = t('title');
  const router = useRouter();
  const {
    Component,
    emotionCache = clientSideEmotionCache, pageProps
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1 width=device-width' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' type='image/png' href='mui.png' />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </CacheProvider>
  )
};
