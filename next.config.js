/* eslint-disable fp/no-mutation */
/* eslint-disable unicorn/prefer-node-protocol */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.resolve(__dirname, 'assets', 'styles')],
        prependData: `
            @use "colors.scss";
            @use "variables.scss";
        `,
    },
};
