const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required: true},
    image_urls: [{type: String, required: true}]
})

module.exports = mongoose.model("product_up", productSchema)