
/**
 * Global application config.
 * mongodb://<dbuser>:<dbpassword>@ds233452.mlab.com:33452/databasetests
 */
const appconfig = {
    webSessionSecretKey : '2C44-4D44-WppQ38S', // Password salt used to manage UI sessions.    
    //database: 'mongodb://default:defaultuser1234@ds233452.mlab.com:33452/databasetests', // Database connection string.
    database: 'mongodb://plataformauser:user1234@ds161312.mlab.com:61312/plataformanegocio',
    okMessage : 'Operação realizada com sucesso',
    errorMessage: 'Falha ao realizar essa operação'
};
module.exports = appconfig;