const infoClean = (info) => {
    return info.map((gadget) => {
        return {
            id: gadget.id,
            name: gadget.name,
            price: gadget.price,
            image: gadget.image,
            stock: gadget.stock
        }
    })
}

module.exports = {infoClean}