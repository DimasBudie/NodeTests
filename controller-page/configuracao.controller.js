const configService = require('../service/configuracao.service');
const usuarioService = require('../service/usuario.service');
var multer = require('multer');
var fs = require('fs');
const config = require('../appconfig');
const fileUpload = require('express-fileupload');

const data = { usuario: null, config: null };

module.exports = {

    // Renderiza a pagina inicial.
    index: async (req, res) => {        
        data.usuario = req.session.user;
        data.config = await configService.getByUserId(req.session.usuarioId);   
        res.render('pages/configuracao', {
            data: data,
            msg: null
        });
    },

    updatePassword: async (req, res) => {
        let input = req.body;
        try {
            data.usuario = req.session.user;
            data.config = await usuarioService.updatePassword({
                usuario: input.usuario,
                senhaAntiga: input.senhaAntiga,
                novaSenha: input.novaSenha,
                novaSenhaRepete: input.novaSenhaRepete
            });

            res.render('pages/configuracao', {
                data: data,
                msg: config.okMessage
            });
        } catch (error) {
            res.render('pages/configuracao', {
                data: data,
                msg: error
            });
        }
    },
    
    updateLogo: async (req, res) => {

        console.log(req.body);
        configService.UploadLogo(req, req.body);data.config = req.body;
        res.render('pages/configuracao', {
            data: data,  
            msg: config.okMessage 
        });
    },

    updateJuros: async (req, res) => {
        let input = req.body;
        try {
            data.config = await configService.updateJuros({
                id: input.id,
                taxaInvestidor: input.taxaInvestidor,
                taxaEmprestimo: input.taxaEmprestimo,
            });

            res.render('pages/configuracao', {
                data: data,
                msg: config.okMessage
            });
        } catch (error) {
            res.render('pages/configuracao', {
                data: data,
                msg: error
            });
        }
    },

};

function teste(request, response){
    console.log("Entrou no Teste");
        var storage = multer.diskStorage({
        destination: function (request, file, callback) {
          callback(null, '/example/uploads');
        },
        filename: function (request, file, callback) {
          console.log(file);
          callback(null, file.originalname)
        }
      });

      var upload = multer({storage: storage}).array('photo', 5);

      var filesBase64 = [];
  upload(request, response, function(err) {
    if(err) {
      console.log('Error Occured');
      return;
    }
    console.log(request.files);
    for(var i = 0; i < request.files.length; i++) {
      filesBase64.push({
 fileName : request.files[i].originalname,
 base64 : new Buffer(fs.readFileSync(request.files[i].path)).toString('base64')
      });
      fs.unlink(request.files[i].path);
      console.log('File Name : ' + filesBase64[i].fileName);

      console.log('Base 64 : ' + filesBase64[i].base64.substring(0,50));
    }
    
    console.log('Photo Uploaded');
  })
}