import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import Button from '@components/shared/Button';
import Paragraph from '@components/shared/Paragraph';
import TextInput from '@components/shared/TextInput';
import Title from '@components/shared/Title';
import { Routes } from '@shared/Routes';

import styles from './signIn.module.scss';

const SignIn: React.FC = (): ReactElement => {
    const router = useRouter();

    const onSubmit = () => {
        router.push(Routes.USERS);
    };

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <div className={styles['header-container']}>
                <Title isBold isPrimaryColor textId="root.sign_in.title" />
                <Paragraph textId="root.sign_in.description" />
            </div>
            <div className={styles['input-container']}>
                <TextInput isBold isPrimaryColor textId="root.sign_in.username" />
                <TextInput isBold isPrimaryColor textId="root.sign_in.password" />
                <div className={styles['button-container']}>
                    <Button isRounded isSubmit textId="root.sign_in.sign_in" />
                </div>
            </div>
        </form>
    );
};

SignIn.displayName = 'SignIn';

export default SignIn;
