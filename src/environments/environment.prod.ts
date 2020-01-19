export const environment = {
  production: true,
  baseUrl: 'https://goal-tracker-backend.herokuapp.com',
  authConfig: {
    clientId: '0oa2dy85fyiB7VD9u357',
    issuer: 'https://dev-923407.okta.com/oauth2/default',
    redirectUri: 'https://goaltracker.obit.sk/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
