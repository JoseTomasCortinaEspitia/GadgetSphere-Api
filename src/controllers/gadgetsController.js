const {Gadget} = require("../db.js");
const {Op} = require("sequelize");
const {infoClean} = require("../utils/index.js");

const getGadgetByNameController = async (name) => {
    return await Gadget.findAll({
        where: {
            // Utilizamos la expresión regular para buscar coincidencias de cualquier palabra del nombre
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
}



const getGadgetsController = async () => {
    
    const response = await Gadget.findAll();

    return infoClean(response);
}

const getGadgetController = async (id) => {
    return await Gadget.findByPk(id);
}

const postGadgetController = async (name, description, price, image, stock) => {
    return await Gadget.create({
        name,
        description,
        price,
        image,
        stock
    })
};

module.exports = { getGadgetByNameController,
    getGadgetsController,
    getGadgetController,
    postGadgetController
 }