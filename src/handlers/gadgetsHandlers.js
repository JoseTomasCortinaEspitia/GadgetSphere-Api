const { getGadgetByNameController,
    getGadgetsController,
    getGadgetController,
    postGadgetController
 } = require("../controllers/gadgetsController");

//por query => query
const getGadgetsHandler = async (req, res) => {
    const { name } = req.query
    if (name) {
        try {
            const response = await getGadgetByNameController(name);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    } else {
    try {
        const response = await getGadgetsController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});   
    }
    }
}
// por id => params
const getGadgetHandler = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getGadgetController(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//por body => body
const postGadgetHandler = async (req, res) => {
    const { name, description, price, image, stock} = req.body
    try {
        const response = await postGadgetController(name, description, price, image, stock);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { getGadgetsHandler, getGadgetHandler, postGadgetHandler }