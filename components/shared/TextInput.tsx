import classNames from 'classnames';
import React, { ReactElement } from 'react';

import styles from './textInput.module.scss';

interface Props {
    textId: string;
    isBold?: boolean;
    isPrimaryColor?: boolean;
}

const TextInput: React.FC<Props> = ({ textId, isBold = false, isPrimaryColor = false }): ReactElement => {
    const text = textId;

    const textInputClasses = classNames(styles.text, {
        [styles['text--bold']]: isBold,
        [styles['text--no-primary']]: !isPrimaryColor,
    });

    return (
        <div className={styles.container}>
            <input className={textInputClasses} value={text} />
        </div>
    );
};

TextInput.displayName = 'TextInput';

export default TextInput;
