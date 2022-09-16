import { UrlObject } from 'node:url';

import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './index.module.scss';

const getRoute = (): UrlObject => ({ pathname: '/' });

const HomePage = (): ReactElement => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{/* <FormattedMessage id="home.content.title" /> */}</h1>
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
