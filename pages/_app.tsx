import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ReactElement } from 'react';

import Internationalization from '@components/root/Internationalization';
import Logo from '@components/shared/Logo';
import '@styles/globals.scss';

import styles from './app.module.scss';

const NextJSExampleApp = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <Internationalization>
            <Head>
                <title>NextJS-Example</title>
                <meta content="NextJs example" name="description" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <header className={styles['header-container']}>
                <Logo />
                <div className={styles['navigation-container']}>{}</div>
            </header>
            <main className={styles['main-container']}>
                <Component {...pageProps} />
            </main>
        </Internationalization>
    );
};

NextJSExampleApp.displayName = 'NextJSExampleApp';

export default NextJSExampleApp;
