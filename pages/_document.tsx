import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

import { DEFAULT_LOCALE } from '../l10n/Languages';

class NextJsDocument extends Document {
    render(): ReactElement {
        return (
            <Html>
                <Head lang={DEFAULT_LOCALE} />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default NextJsDocument;
