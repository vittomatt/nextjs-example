import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './paragraph.module.scss';

interface Props {
    textId: string;
}

const Paragraph: React.FC<Props> = ({ textId }): ReactElement => (
    <div className={styles.container}>
        <p className={styles.text}>
            <FormattedMessage id={textId} />
        </p>
    </div>
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
