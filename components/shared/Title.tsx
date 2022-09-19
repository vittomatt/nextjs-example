import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './title.module.scss';

interface Props {
    textId: string;
    isBold?: boolean;
    isPrimaryColor?: boolean;
}

const Title: React.FC<Props> = ({ textId, isBold = false, isPrimaryColor = false }): ReactElement => {
    const titleClasses = classNames(styles.text, {
        [styles['text--bold']]: isBold,
        [styles['text--no-primary']]: !isPrimaryColor,
    });

    return (
        <div className={styles.container}>
            <h1 className={titleClasses}>
                <FormattedMessage id={textId} />
            </h1>
        </div>
    );
};

Title.displayName = 'Title';

export default Title;
