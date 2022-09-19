/* eslint-disable fp/no-mutation */
/* eslint-disable unicorn/prefer-node-protocol */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    sassOptions: {
        includePaths: [path.resolve(__dirname, 'styles')],
        prependData: `
            @use "colors.scss";
            @use "variables.scss";
        `,
    },
};
