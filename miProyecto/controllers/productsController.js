let database = require('../db/data.js');
let productController = {
    index: function(req,res){
        return res.render('index', {productos: database.lista})
    },
    add: function(req,res){
        return res.render('product-add')
    },
    show: function(req,res){
        return res.render('product', {productos: database.lista})
    }
}

module.exports = productController;