export const environment = {
  production: true,
  authConfig: {
    clientId: '0oa2dy85fyiB7VD9u357',
    issuer: 'https://dev-923407.okta.com/oauth2/default',
    redirectUri: 'https://goal-tracker-fe.herokuapp.com/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
