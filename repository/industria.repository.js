const Industria = require('../model/industria.model');

module.exports = {

	create: (industria) => {		
        return new Promise(res => {            
            let db = new Industria(industria);            
            db.id = db._id;                        
            res(db.save());
        });
    },

	get: () => {		
		let industrias = new Promise(res => {
			Industria
				.find((err, doc) => {
					if(err){
						console.log("erro DA PORRA");
					}
					else{
						res(doc);
					}
				});
		}); 		
		return industrias;
	},
}