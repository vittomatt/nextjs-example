import { ReactElement } from 'react';

import styles from './usersPage.module.scss';

const UsersPage = (): ReactElement => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Holis!</h1>
            <footer />
        </div>
    );
};

UsersPage.displayName = 'UsersPage';

export default UsersPage;
