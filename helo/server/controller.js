module.exports = {
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {username, pass} = req.body;
        console.log('create')
        console.log(req.body)
        dbInstance.create_user([username, pass])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
    readUser: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params} = req;
        console.log(req.body)
        dbInstance.read_user([params.id])
        .then( (user) => res.status(200).send(user) )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    },
};