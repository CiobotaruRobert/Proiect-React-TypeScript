const env = {
    development: {
      BASE_URL: 'https://my-json-server.typicode.com/CiobotaruRobert/Proiect-React-TypeScript/',
      USER_NAME: 'robert.robert040801@yahoo.com',
      PASSWORD: 'samplereact'
    },
    production: {
      BASE_URL: 'https://my-json-server.typicode.com/CiobotaruRobert/Proiect-React-TypeScript/',
      USER_NAME: 'robert.robert040801@yahoo.com',
      PASSWORD: 'samplereact'
    },
    test: {
      BASE_URL: 'https://my-json-server.typicode.com/CiobotaruRobert/Proiect-React-TypeScript/',
      USER_NAME: 'robert.robert040801@yahoo.com',
      PASSWORD: 'samplereact'
    },
  };
  
  export const env_var = env[process.env.NODE_ENV];