const config = {
    apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
    login: {
        userNameCharLimit: 12,
        emailCharLimit: 25
    }
};
export default config;
export const { apiEndpoint } = config;
