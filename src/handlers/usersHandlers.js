const postUserHandler = (req, res) => {
    res.status(200).send("Aqui va el endpoint para crear un nuevo usuario");
}

module.exports = { postUserHandler }