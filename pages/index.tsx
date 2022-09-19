import { UrlObject } from 'node:url';

import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import Footer from '@components/root/Footer';
import SignIn from '@components/root/SignIn';
import { Routes } from '@shared/Routes';

import styles from './index.module.scss';

const getRoute = (): UrlObject => ({ pathname: Routes.ROOT });

const HomePage = (): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles['sign-in-container']}>
                <SignIn />
            </div>
            <div className={styles['footer-container']}>
                <Footer />
            </div>
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
