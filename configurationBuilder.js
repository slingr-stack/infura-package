/****************************************************
 Configuration builder

 The configuration object should be built to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {
        id: 'installationInfo-Infura-User-'+sys.context.getCurrentUserRecord().id(),
        authUrl: "https://example.com/login/oauth/authorize",
        accessTokenUrl: "https://example.com/login/oauth/access_token",
        clientId: config.choice,
        clientSecret: config.text,
        oauthCallback: config.INFURA_API_BASE_URL
    }
    return config;
}
