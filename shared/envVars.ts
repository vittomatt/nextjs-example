/* eslint-disable unicorn/prevent-abbreviations */
interface Secrets {
    BASE_URL: string;
}

const getVariables = (): Secrets => ({
    BASE_URL: process.env.REACT_APP_API_URL ?? '',
});

export default getVariables;
