/* This configuration follows YAML naming style. */
module.exports = {
  app: {
    project: 'name',
    applicationName: 'name',
  },
  admin: {
    name: 'username',
    email: 'email@gmail.com',
    password: 'password',
  },
  mongoUri: 'mongoUrl',
  storage: {
    firebaseUrlBase: 'url',
    imageUrlBase: 'assets/images/',
    // bucket: 'static-readr-tw-dev',
    // bucket: 'mirrormedia-files'
  },
  firebaseConfig: {
    apiKey: 'key',
    authDomain: 'domain',
    projectId: 'domain',
    storageBucket: 'bucket',
    messagingSenderId: 'test',
    appId: 'id',
    measurementId: 'id',
  },
  session: {
    secure: false,
    cookieSecret: 'cookie',
  },
}
