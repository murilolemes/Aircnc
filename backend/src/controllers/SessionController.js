// index = retornar uma listagem de sessões
// show = retornar uma unica sessão
// store = criar uma nova sessão
// update = alterar uma sessão
// destroy = remover ou deletar uma sessão

const User = require('../models/User');

module.exports = {
    async store( req , res ) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        };

        return res.json(user);
    },
};