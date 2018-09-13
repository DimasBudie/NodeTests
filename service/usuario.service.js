const repo = require('../repository/usuario.repository');

module.exports = {

    getByLogin: async (username, password) => {
        if (!username) {
            throw "username is mandatory"
        }

        if (!password) {
            throw "password is mandatory";
        }

        return await repo.getByLogin(username, password);        
    },

    getById: async (id) => {
        return await repo.getById(id);        
    },

    delete: async (id) => {
        return await repo.delete(id);
    },

    getByUsername: async (usuario) => {
        if (!usuario) {
            throw "username is mandatory";
        }

        let user = await repo.getByUsername(usuario);
        return user.usuario == usuario ? user : null;
    },

    getUsuario: async () => {
        return await repo.get();                
    },

    updateUsuario: async (usuario) => {
        console.log(usuario.ativo);
        if(usuario.ativo == "on"){
            usuario.ativo = true;
        }
        else{usuario.ativo = false;}
        if(!usuario.id){
            return await repo.create(usuario);
        } else{
            return await repo.update(usuario);    
        }
    },

    updatePassword: async (input) => {        
        if (!input.usuario) throw "Usuário é obrigatório";
        if (!input.senhaAntiga) throw "Senha antiga é obrigatória";
        if (!input.novaSenha) throw "Nova é obrigatória";
        if (!input.novaSenhaRepete) throw "Nova é obrigatória";        

        let model = await repo.getByUsername(input.usuario);
        model.senha = input.novaSenha;
        return await repo.update(model);
    },
}