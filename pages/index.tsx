import { UrlObject } from 'node:url';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { Routes } from '@shared/Routes';

import styles from './index.module.scss';

const getRoute = (): UrlObject => ({ pathname: Routes.ROOT });

const HomePage = (): ReactElement => {
    const { formatMessage } = useIntl();
    const f = (id: any) => formatMessage({ id });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{f('hello')}</h1>
            <Link href={Routes.USERS}>Go to users page</Link>
            <footer />
        </div>
    );
};

const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
        revalidate: 300,
    };
};

HomePage.displayName = 'HomePage';

export { getRoute, getStaticProps };
export default HomePage;
