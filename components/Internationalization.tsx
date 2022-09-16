import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import locales from '../content/locale';

import { Routes } from '../shared/Routes';

const DEFAULT_LOCALE = 'en';
type AcceptedLocales = typeof DEFAULT_LOCALE | 'es';

interface Props {
    children: React.ReactNode;
}

const Internationalization: React.FC<Props> = ({ children }): ReactElement => {
    const router = useRouter();
    const { locale, defaultLocale, pathname } = router;

    const localeRequested = locale as AcceptedLocales;
    const localeToRender = locales[localeRequested];

    const pathRequested = pathname as Routes;
    const messages = localeToRender[pathRequested];

    return (
        <IntlProvider defaultLocale={defaultLocale} locale={localeRequested} messages={messages}>
            {children}
        </IntlProvider>
    );
};

Internationalization.displayName = 'Internationalization';

export default Internationalization;
