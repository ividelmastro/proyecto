let db = require('../db/data.js');
let productsController = {
    index: function(req,res){
        return res.render('index', {productos: db.lista})
    },
    add: function(req,res){
        return res.render('product-add')
    },
    show: function(req,res){
        return res.render('product', {productos: db.lista})
    }
}

module.exports = productsController;