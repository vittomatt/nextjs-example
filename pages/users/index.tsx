import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import styles from './usersPage.module.scss';

const UsersPage = (): ReactElement => {
    const { formatMessage } = useIntl();
    const f = (id: any) => formatMessage({ id });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Holis!</h1>
            <footer />
        </div>
    );
};

UsersPage.displayName = 'UsersPage';

export default UsersPage;
