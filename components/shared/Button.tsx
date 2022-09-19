import classNames from 'classnames';
import { noop } from 'lodash';
import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './button.module.scss';

interface Props {
    textId: string;
    isSubmit?: boolean;
    isBold?: boolean;
    isDisabled?: boolean;
    isPrimaryColor?: boolean;
    isRounded?: boolean;
    onClick?: () => {};
}

const Button: React.FC<Props> = ({
    textId,
    isSubmit = false,
    isBold = false,
    isDisabled = false,
    isPrimaryColor = false,
    isRounded = false,
    onClick = noop,
}): ReactElement => {
    const buttonClasses = classNames(styles.button, {
        [styles['button--no-primary']]: !isPrimaryColor,
        [styles['button--bold']]: isBold,
        [styles['button--disabled']]: isDisabled,
        [styles['button--rounded']]: isRounded,
    });

    return (
        <div className={styles.container}>
            <button className={buttonClasses} type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
                <FormattedMessage id={textId} />
            </button>
        </div>
    );
};

Button.displayName = 'Button';

export default Button;
