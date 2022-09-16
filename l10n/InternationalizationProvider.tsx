import React, { ReactElement, useState, useMemo } from 'react';
import { IntlProvider } from 'react-intl';

import Languages, { DEFAULT_LOCALE, DEFAULT_STRINGS } from './Languages';

const browserLanguage = navigator.language.split(/[_-]/)[0];

interface LanguageContextType {
    locale: string;
    selectLanguage: any;
}

const LanguageContext = React.createContext<LanguageContextType>({
    locale: DEFAULT_LOCALE,
    selectLanguage: DEFAULT_STRINGS,
});

const InternationalizationProvider: React.FC<any> = ({ children }): ReactElement => {
    const [locale, setLocale] = useState(browserLanguage);
    const [messages, setMessages] = useState(DEFAULT_STRINGS);

    const selectLanguage = (newLocale: string): void => {
        setLocale(newLocale);
        const newLanguageSelected = Languages.find((language) => language.locale === newLocale);
        setMessages(newLanguageSelected?.strings ?? DEFAULT_STRINGS);
    };

    const localeWithSelectLanguage = useMemo(() => ({ locale, selectLanguage }), [locale]);

    return (
        <LanguageContext.Provider value={localeWithSelectLanguage}>
            <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

InternationalizationProvider.displayName = 'InternationalizationProvider';

export { LanguageContext };
export default InternationalizationProvider;
