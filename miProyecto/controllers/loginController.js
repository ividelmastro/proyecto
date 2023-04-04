let loginController = {
    index: function(req,res){
        return res.send('login')
    },
    profile: function(req,res){
        return res.send('profile')
    },
    edit: function(req,res){
        return res.send('profile-edit')
    }
    
}

module.exports = loginController;