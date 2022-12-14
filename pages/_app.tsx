import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Internationalization from '../components/Internationalization';
import Logo from '../components/shared/Logo';

import styles from './app.module.scss';
import '../assets/styles/globals.scss';

const NextJSExampleApp = ({ Component, pageProps }: AppProps): ReactElement => {
    return (
        <Internationalization>
            <Head>
                <title>NextJS-Example</title>
                <meta content="NextJs example" name="description" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>
            <header className={styles.headerContainer}>
                <Logo />
                <div className={styles.navigationContainer}>{}</div>
            </header>
            <main className={styles.mainContainer}>
                <Component {...pageProps} />
            </main>
        </Internationalization>
    );
};

NextJSExampleApp.displayName = 'NextJSExampleApp';

export default NextJSExampleApp;
