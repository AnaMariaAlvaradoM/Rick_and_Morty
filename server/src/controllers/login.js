const users = require('../utils/users');

const login = (req, res) =>{
    const { email, password } = req.query;

    const userEncontrado = users.find((user) => user.email === email && user.password === password)

    return userEncontrado
    ? res.status(200).json({ access: true})
    : res.status(404).json({ access: false})
//! ⬆️⬆️⬆️⬆️Esto es lo mismo que esto: ⬇️⬇️⬇️⬇️⬇️
    //if(userEncontrado) return res.status(200).json({ access: true})
    // return res.status(404).json({ access: false})
}
module.exports = {
    login
};

