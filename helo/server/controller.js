module.exports = {
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {username, pass} = req.body;
        console.log('create')
        console.log(req.body)
        dbInstance.create_user([username, pass])
        .then( () => res.status(200).send() )
        .catch( (e) =>{console.log(e); res.status(500).send() });
    }
};