const Industria = require('../model/industria.model');

module.exports = {

	create: (industria) => {		
        return new Promise(res => {            
            let db = new Industria(industria);            
            db.id = db._id;                        
            res(db.save());
        });
	},
	
	update: (industria) =>{
		return new Promise(res => {
			Industria.update({'_id' : industria.id}, industria, (err, doc) => {                
                return doc != null ? res(industria) : res(null);
            });
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

	getById: async (id) => {
        return new Promise(res => {
            Industria
                .findOne({ '_id': id }, (err, doc) => {
                    res(doc);
                });
        });
    },

    delete: async (id) => {
        return new Promise(res => {
            Industria
                .findOneAndDelete({ '_id': id }, (err, doc) => {
                    res(doc);
                });
        });
    },
}