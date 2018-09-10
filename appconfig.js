
/**
 * Global application config.
 */
const appconfig = {
    webSessionSecretKey : '2C44-4D44-WppQ38S', // Password salt used to manage UI sessions.    
    database: 'mongodb://default:defaultuser1234@ds233452.mlab.com:33452/databasetests', // Database connection string.
    okMessage : 'Operação realizada com sucesso',
    errorMessage: 'Falha ao realizar essa operação'
};
module.exports = appconfig;