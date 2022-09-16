import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../components/shared/Logo';
import InternationalizationProvider from '../l10n/InternationalizationProvider';

import styles from './app.module.scss';
import '../assets/styles/globals.scss';

const NextJSExampleApp = ({ Component, pageProps }: AppProps): ReactElement => (
    <>
        <Head>
            <title>{/* <FormattedMessage id="home.title" /> */}</title>
            <meta content="NextJs example" name="description" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        </Head>
        <header className={styles.headerContainer}>
            <Logo />
            <div className={styles.navigationContainer}>
                {/* TODO: do not hardcode this */}
                <h1>Foo</h1>
            </div>
        </header>
        <main className={styles.mainContainer}>
            <Component {...pageProps} />
        </main>
    </>
);

NextJSExampleApp.displayName = 'NextJSExampleApp';

export default NextJSExampleApp;
